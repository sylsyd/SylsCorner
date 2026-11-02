param(
  [Parameter(Mandatory = $true)][string]$Epub
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$root = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$destination = Join-Path $root 'lessons/5si/unit-2/reading'
$titles = @('A Monster Calls', 'Breakfast', 'School', 'Life Writing', 'Three Stories', 'Grandma', 'The Wildness of Stories')

function Read-ArchiveXml($Archive, [string]$Name) {
  $entry = $Archive.GetEntry($Name)
  if (!$entry) { throw "Missing EPUB entry: $Name" }
  $settings = [System.Xml.XmlReaderSettings]::new()
  $settings.DtdProcessing = [System.Xml.DtdProcessing]::Prohibit
  $settings.XmlResolver = $null
  $stream = $entry.Open()
  $reader = [System.Xml.XmlReader]::Create($stream, $settings)
  try {
    $document = [System.Xml.XmlDocument]::new()
    $document.PreserveWhitespace = $true
    $document.Load($reader)
    return ,$document
  } finally { $reader.Dispose(); $stream.Dispose() }
}

function Read-Runs([System.Xml.XmlNode]$Node, [bool]$Italic = $false, [bool]$Bold = $false) {
  if ($Node.NodeType -in @('Text', 'CDATA', 'Whitespace', 'SignificantWhitespace')) {
    [pscustomobject]@{ text = $Node.Value; italic = $Italic; bold = $Bold }
    return
  }
  if ($Node.LocalName -eq 'br') {
    [pscustomobject]@{ text = "`n"; italic = $Italic; bold = $Bold }
    return
  }
  if ($Node.LocalName -in @('script', 'style')) { throw 'Unexpected active content in a chapter.' }
  $classes = if ($Node -is [System.Xml.XmlElement]) { $Node.GetAttribute('class') -split '\s+' } else { @() }
  $isItalic = $Italic -or $Node.LocalName -in @('em', 'i') -or 'italic1' -in $classes -or 'italic' -in $classes
  $isBold = $Bold -or $Node.LocalName -in @('strong', 'b') -or 'bold' -in $classes -or 'italic' -in $classes
  foreach ($child in $Node.ChildNodes) { Read-Runs $child $isItalic $isBold }
}

$archive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $Epub).Path)
try {
  $container = Read-ArchiveXml $archive 'META-INF/container.xml'
  $packageName = $container.SelectSingleNode('//*[local-name()="rootfile"]').GetAttribute('full-path')
  $package = Read-ArchiveXml $archive $packageName
  $manifest = @{}
  foreach ($item in $package.SelectNodes('//*[local-name()="manifest"]/*[local-name()="item"]')) {
    $manifest[$item.GetAttribute('id')] = $item.GetAttribute('href')
  }
  $spine = @($package.SelectNodes('//*[local-name()="spine"]/*[local-name()="itemref"]') | ForEach-Object { $manifest[$_.GetAttribute('idref')] })
  $chapters = @()
  for ($chapter = 1; $chapter -le 7; $chapter++) {
    $entryName = 'OEBPS/Text/A_Monster_Calls_split_{0:d3}.html' -f ($chapter + 3)
    if ($entryName -notin $spine) { throw "Chapter $chapter is not in the EPUB reading order." }
    $document = Read-ArchiveXml $archive $entryName
    $paragraphs = $document.SelectNodes('//*[local-name()="body"]//*[local-name()="p"]')
    if ($paragraphs[0].InnerText.Trim() -ine $titles[$chapter - 1]) { throw "Unexpected heading in chapter $chapter." }
    if ($document.SelectNodes('//*[local-name()="img"]').Count) { throw "Chapter $chapter contains images requiring review." }
    $content = @()
    foreach ($paragraph in $paragraphs | Select-Object -Skip 1) {
      if ([string]::IsNullOrWhiteSpace($paragraph.InnerText)) { continue }
      $class = $paragraph.GetAttribute('class')
      $content += [pscustomobject]@{
        runs = @(Read-Runs $paragraph)
        indent = $class -eq 'calibre8'
        gap = $(if ($class -eq 'calibre13') { 2 } elseif ($class -in @('calibre14', 'calibre2')) { 1 } else { 0 })
        center = $class -eq 'calibre2'
      }
    }
    $chapters += [pscustomobject]@{ number = $chapter; title = $titles[$chapter - 1]; book = 'A Monster Calls'; author = 'Patrick Ness'; paragraphs = $content }
  }
  New-Item -ItemType Directory -Path $destination -Force | Out-Null
  foreach ($chapter in $chapters) {
    $json = ConvertTo-Json -InputObject $chapter -Depth 10 -Compress
    $json = $json.Replace('<', '\u003c').Replace('>', '\u003e')
    $script = "globalThis.LearningDeckChapters = globalThis.LearningDeckChapters || {};`nglobalThis.LearningDeckChapters[$($chapter.number)] = $json;`n"
    [System.IO.File]::WriteAllText((Join-Path $destination "chapter-$($chapter.number).js"), $script, [System.Text.UTF8Encoding]::new($false))
    Write-Output "Imported chapter $($chapter.number): $($chapter.title) ($($chapter.paragraphs.Count) paragraphs)"
  }
} finally { $archive.Dispose() }

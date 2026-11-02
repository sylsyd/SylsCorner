param([Parameter(Mandatory = $true)][string]$Epub)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$destination = Join-Path $PSScriptRoot '../lessons/6si/unit-2/reading'

function Read-ArchiveXml($Archive, [string]$Name) {
  $entry = $Archive.GetEntry($Name)
  if (!$entry) { throw "Missing EPUB entry: $Name" }
  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { $source = $reader.ReadToEnd() } finally { $reader.Dispose() }
  # This XHTML edition uses HTML non-breaking spaces but must not load its external DTD.
  $source = $source.Replace('&nbsp;', '&#160;')
  $settings = [System.Xml.XmlReaderSettings]::new()
  $settings.DtdProcessing = [System.Xml.DtdProcessing]::Ignore
  $settings.XmlResolver = $null
  $xmlReader = [System.Xml.XmlReader]::Create([System.IO.StringReader]::new($source), $settings)
  try {
    $document = [System.Xml.XmlDocument]::new()
    $document.PreserveWhitespace = $true
    $document.Load($xmlReader)
    return ,$document
  } finally { $xmlReader.Dispose() }
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
  if ($Node.LocalName -in @('script', 'style', 'img')) { throw 'Unexpected content inside a chapter paragraph.' }
  $classes = if ($Node -is [System.Xml.XmlElement]) { $Node.GetAttribute('class') -split '\s+' } else { @() }
  $isItalic = $Italic -or $Node.LocalName -in @('em', 'i') -or 'italic' -in $classes
  $isBold = $Bold -or $Node.LocalName -in @('strong', 'b') -or 'bold' -in $classes
  foreach ($child in $Node.ChildNodes) { Read-Runs $child $isItalic $isBold }
}

$archive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $Epub).Path)
try {
  $container = Read-ArchiveXml $archive 'META-INF/container.xml'
  $packageName = $container.SelectSingleNode('//*[local-name()="rootfile"]').GetAttribute('full-path')
  $package = Read-ArchiveXml $archive $packageName
  $base = $packageName.Substring(0, $packageName.LastIndexOf('/') + 1)
  $manifest = @{}
  foreach ($item in $package.SelectNodes('//*[local-name()="manifest"]/*[local-name()="item"]')) { $manifest[$item.GetAttribute('id')] = $item.GetAttribute('href') }
  $chapters = @{}
  $current = 0
  $complete = $false
  foreach ($item in $package.SelectNodes('//*[local-name()="spine"]/*[local-name()="itemref"]')) {
    $href = $manifest[$item.GetAttribute('idref')]
    if ($href -notmatch '^page-\d+\.html$') { continue }
    $document = Read-ArchiveXml $archive ($base + $href)
    foreach ($p in $document.SelectNodes('//*[local-name()="body"]//*[local-name()="p"]')) {
      $text = $p.InnerText.Trim()
      if (!$text) { continue }
      $next = $p.NextSibling
      while ($next -and $next.NodeType -ne 'Element') { $next = $next.NextSibling }
      $heading = $text -match '^\d+$' -and $next -and $next.LocalName -eq 'div' -and $next.GetAttribute('style') -match 'height:(24|32)px'
      if ($heading) {
        $number = [int]$text
        if ($number -ne $current + 1) { throw "Unexpected chapter order at $number." }
        if ($number -eq 8) { $complete = $true; break }
        $current = $number
        $chapters[$current] = [pscustomobject]@{ number = $current; title = ''; book = 'Holes'; author = 'Louis Sachar'; paragraphs = [System.Collections.Generic.List[object]]::new() }
        continue
      }
      if ($current -ge 1 -and $current -le 7) {
        $chapters[$current].paragraphs.Add([pscustomobject]@{ runs = @(Read-Runs $p); indent = $chapters[$current].paragraphs.Count -gt 0; gap = 0; center = $p.GetAttribute('class') -eq 'txtcenter' })
      }
    }
    if ($complete) { break }
  }
  if (!$complete -or $chapters.Count -ne 7) { throw 'Could not verify all seven chapters and the chapter 8 boundary.' }
  New-Item -ItemType Directory -Path $destination -Force | Out-Null
  foreach ($number in 1..7) {
    $chapter = $chapters[$number]
    if (!$chapter.paragraphs.Count) { throw "Chapter $number is empty." }
    $json = (ConvertTo-Json -InputObject $chapter -Depth 10 -Compress).Replace('<', '\u003c').Replace('>', '\u003e')
    $script = "globalThis.LearningDeckHolesChapters = globalThis.LearningDeckHolesChapters || {};`nglobalThis.LearningDeckHolesChapters[$number] = $json;`n"
    [System.IO.File]::WriteAllText((Join-Path $destination "chapter-$number.js"), $script, [System.Text.UTF8Encoding]::new($false))
    Write-Output "Imported Holes chapter $number ($($chapter.paragraphs.Count) paragraphs)"
  }
} finally { $archive.Dispose() }

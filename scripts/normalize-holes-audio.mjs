import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const [source, first, last] = process.argv.slice(2);
const start = Number(first), end = Number(last);
assert.ok(source && Number.isInteger(start) && Number.isInteger(end) && start >= 1 && end <= 50 && start <= end,
  'Usage: node scripts/normalize-holes-audio.mjs <source folder> <first chapter> <last chapter>');
const output = fileURLToPath(new URL('../lessons/6si/unit-2/audiobook/', import.meta.url));
const run = promisify(execFile);
const ffmpeg = args => run('ffmpeg', ['-hide_banner', '-nostdin', '-xerror', ...args], { windowsHide: true });
const loudness = 'loudnorm=I=-16:TP=-2:LRA=7';
async function measure(file) {
  const { stderr } = await ffmpeg(['-i', file, '-af', loudness + ':print_format=json', '-f', 'null', '-']);
  return JSON.parse(stderr.slice(stderr.lastIndexOf('{'), stderr.lastIndexOf('}') + 1));
}
async function duration(file) {
  const { stdout } = await run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'json', file], { windowsHide: true });
  return Number(JSON.parse(stdout).format.duration);
}
const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'holes-audio-'));
const chapters = Array.from({ length: end - start + 1 }, (_, i) => i + start);
async function worker() {
  for (let chapter; (chapter = chapters.shift()) !== undefined;) {
    const number = String(chapter).padStart(2, '0');
    const input = path.join(source, number + ' - Chapter ' + number + '.mp3');
    const filename = 'chapter-' + chapter + '.mp3';
    const pending = path.join(temp, filename);
    try {
      const before = await measure(input);
      const filter = loudness + ':measured_I=' + before.input_i + ':measured_TP=' + before.input_tp +
        ':measured_LRA=' + before.input_lra + ':measured_thresh=' + before.input_thresh + ':offset=' + before.target_offset + ':linear=true';
      await ffmpeg(['-i', input, '-map', '0:a:0', '-af', filter, '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '48000', pending]);
      const after = await measure(pending);
      assert.ok(Math.abs(Number(after.input_i) + 16) < 1, 'Chapter ' + chapter + ': unexpected loudness ' + after.input_i);
      assert.ok(Number(after.input_tp) <= -1, 'Chapter ' + chapter + ': peak too high ' + after.input_tp);
      assert.ok(Math.abs(await duration(input) - await duration(pending)) < 0.1, 'Chapter ' + chapter + ': duration changed');
      await fs.copyFile(pending, path.join(output, filename), fs.constants.COPYFILE_EXCL);
      console.log('Chapter ' + chapter + ': ' + before.input_i + ' to ' + after.input_i + ' LUFS; ' + after.input_tp + ' dBTP');
    } finally {
      await fs.rm(pending, { force: true });
    }
  }
}
const results = await Promise.allSettled(Array.from({ length: 3 }, () => worker()));
await fs.rmdir(temp);
for (const result of results) {
  if (result.status === 'rejected') {
    console.error(result.reason);
    process.exitCode = 1;
  }
}

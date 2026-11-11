import { setupSharedReading } from './chapter-shared-reading.js?v=20261111c';
import { chapter8Reading, chapter9Reading, chapter10Reading, chapter11Reading } from './amc-shared-reading-data.js?v=20261111d';

for (const [chapter, reading] of [[8, chapter8Reading], [9, chapter9Reading], [10, chapter10Reading], [11, chapter11Reading]]) {
  const audio = document.getElementById('chapter-' + chapter + '-audio');
  if (audio) setupSharedReading(audio, 'A Monster Calls', chapter, reading);
}

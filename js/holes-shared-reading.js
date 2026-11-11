import { setupSharedReading } from './chapter-shared-reading.js?v=20261111c';
import { chapter14Reading, chapter15Reading } from './holes-shared-reading-data.js?v=20261111b';

for (const [chapter, reading] of [[14, chapter14Reading], [15, chapter15Reading]]) {
  const audio = document.getElementById('holes-chapter-' + chapter + '-audio');
  if (audio) setupSharedReading(audio, 'Holes', chapter, reading);
}

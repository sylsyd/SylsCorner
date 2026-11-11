import { setupSharedReading } from './chapter-shared-reading.js?v=20261111c';
import { chapter14Reading, chapter15Reading, chapter16Reading, chapter17Reading, chapter18Reading } from './holes-shared-reading-data.js?v=20261111e';

for (const [chapter, reading] of [[14, chapter14Reading], [15, chapter15Reading], [16, chapter16Reading], [17, chapter17Reading], [18, chapter18Reading]]) {
  const audio = document.getElementById('holes-chapter-' + chapter + '-audio');
  if (audio) setupSharedReading(audio, 'Holes', chapter, reading);
}

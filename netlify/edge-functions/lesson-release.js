import { getStore } from '@netlify/blobs';
import { handleLessonRelease } from '../lesson-release.mjs';

export default function lessonRelease(request) {
  return handleLessonRelease(request, Date.now(),
    key => getStore({ name: 'lesson-releases', consistency: 'strong' }).get(key, { type: 'blob' }));
}

export const config = { path: '/*' };

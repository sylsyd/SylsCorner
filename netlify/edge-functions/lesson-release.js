import { getStore } from '@netlify/blobs';
import { handleLessonRelease } from '../lesson-release.mjs';
import { handleTeacherPreview, teacherSession, previewSettingsKey } from '../teacher-preview.mjs';

export default async function lessonRelease(request) {
  const now = Date.now();
  const store = getStore({ name: 'lesson-releases', consistency: 'strong' });
  let settings;
  const loadSettings = async () => {
    if (settings === undefined) settings = await store.get(previewSettingsKey, { type: 'json' });
    return settings;
  };
  const signIn = await handleTeacherPreview(request, now, loadSettings);
  if (signIn) return signIn;
  let preview = false;
  if (new URL(request.url).pathname.startsWith('/lessons/') &&
      request.headers.get('cookie')?.includes('__Host-deck-teacher=')) {
    preview = await teacherSession(request, now, await loadSettings());
  }
  return handleLessonRelease(request, now, key => store.get(key, { type: 'blob' }), preview);
}

export const config = { path: '/*' };

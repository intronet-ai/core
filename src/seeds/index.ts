import { seedMailTemplates } from './mailTemplates';

export function seedForTests(firestore: any) {
  return Promise.all([seedMailTemplates(firestore)]);
}

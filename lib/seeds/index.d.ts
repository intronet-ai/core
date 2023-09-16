import { TimestampStub } from '../utils/TimestampStub';
import { seedMailTemplates } from './mailTemplates';
export { seedMailTemplates };
export declare function seedForTests(firestore: any): Promise<[void]>;
export declare function seedE2EExampleData(firestore: any, TimestampKlass: typeof TimestampStub): Promise<void>;

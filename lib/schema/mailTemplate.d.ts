import { TimestampStub } from '../utils/TimestampStub';
export interface MailTemplateValue {
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    html: string;
    subject: string;
    requiredDataKeys: Array<string>;
}

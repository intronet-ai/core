import { TimestampStub } from '../utils/TimestampStub';
export interface AskValue {
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    responseId: string;
    communityId: string;
    text: string;
    tags: string[];
}

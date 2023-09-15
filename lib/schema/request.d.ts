import { TimestampStub } from '../utils/TimestampStub';
export interface RequestValue {
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    type: 'ask' | 'offer';
    text: string;
    responseId: string;
}

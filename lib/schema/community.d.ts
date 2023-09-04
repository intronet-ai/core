import { TimestampStub } from '../utils/TimestampStub';
export interface CommunityValue {
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    name: string;
    coverPictureStoragePath?: string;
}

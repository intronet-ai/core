import { TimestampStub } from '../utils/TimestampStub';

export interface ResponseValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  name: string;
  email: string;
  communityId: string;
  uid: string;
}

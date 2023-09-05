import { TimestampStub } from '../utils/TimestampStub';

export interface ProfileValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  uid: string;
  helpWanted?: string;
  canOffer?: string;
  name: string;
  headline?: string;
  photoStoragePath?: string;
}

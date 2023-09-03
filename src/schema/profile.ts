import { TimestampStub } from '../utils/TimestampStub';

export interface ProfileValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  ask: string;
  offer: string;
  headline?: string;
}

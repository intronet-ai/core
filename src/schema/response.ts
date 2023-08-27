import { LinkedinProfile } from '../factories/exampleData/linkedin';
import { TimestampStub } from '../utils/TimestampStub';

export interface ResponseValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  name: string;
  email: string;
  communityId: string;
  uid?: string;
  helpWanted: string;
  canOffer: string;
  linkedinProfileUrl?: string;
  linkedinProfile?: LinkedinProfile;
}

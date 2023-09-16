import { TimestampStub } from '../utils/TimestampStub';

type EmailPreferenceKey = 'emailInsideCommunities' | 'emailOutsideCommunities';

export interface ProfileValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  uid: string;
  helpWanted?: string;
  canOffer?: string;
  name: string;
  headline?: string;
  photoStoragePath?: string;
  emailPreferences?: { [key in EmailPreferenceKey]: boolean };
}

export const DEFAULT_EMAIL_PREFERENCES: {
  [key in EmailPreferenceKey]: boolean;
} = {
  emailInsideCommunities: true,
  emailOutsideCommunities: true,
};

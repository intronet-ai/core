import { TimestampStub } from '../utils/TimestampStub';
type EmailPreferenceKey = 'emailWithAsks' | 'emailWithOffers';
export interface ProfileValue {
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    uid: string;
    helpWanted?: string;
    canOffer?: string;
    name: string;
    headline?: string;
    photoStoragePath?: string;
    emailPreferences?: {
        [key in EmailPreferenceKey]: boolean;
    };
}
export {};

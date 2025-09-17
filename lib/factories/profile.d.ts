import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    name: string;
    uid: string;
    helpWanted?: string | undefined;
    canOffer?: string | undefined;
    headline?: string | undefined;
    photoStoragePath?: string | undefined;
    emailPreferences?: {
        emailInsideCommunities: boolean;
        emailOutsideCommunities: boolean;
    } | undefined;
}, ("createdAt" | "updatedAt" | "name" | "uid") | ("helpWanted" | "canOffer" | "headline" | "photoStoragePath" | "emailPreferences")>;

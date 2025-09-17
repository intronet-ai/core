import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeResponseFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    communityId: string;
    name: string;
    uid: string | null;
    helpWanted: string;
    canOffer: string;
    finalizedAt: TimestampStub | null;
    email: string;
    linkedinProfileUrl?: string | undefined;
    linkedinProfile?: {
        name: string;
        headline: string;
        photoUrl: string;
        linkedinProfileUrl: string;
    } | undefined;
}, ("createdAt" | "updatedAt" | "communityId" | "name" | "uid" | "helpWanted" | "canOffer" | "finalizedAt" | "email") | ("linkedinProfileUrl" | "linkedinProfile")>;

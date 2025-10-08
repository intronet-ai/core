import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAskFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    id: string;
    description: string;
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    source: "whatsapp" | "web";
    communityId: string;
    expiredAt?: TimestampStub | undefined;
    fulfilledAt?: TimestampStub | undefined;
    fulfilledByUid?: string | undefined;
    responseId?: string | undefined;
    communityName?: string | undefined;
    introductionRequestedFor?: string[] | undefined;
    introductionBlurb?: string | undefined;
    introductionSentTo?: string[] | undefined;
    introductionSentAt?: TimestampStub | undefined;
}, ("id" | "description" | "createdAt" | "updatedAt" | "source" | "communityId") | ("expiredAt" | "fulfilledAt" | "fulfilledByUid" | "responseId" | "communityName" | "introductionRequestedFor" | "introductionBlurb" | "introductionSentTo" | "introductionSentAt")>;

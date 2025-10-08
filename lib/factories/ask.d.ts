import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAskFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    communityId: string;
    id: string;
    description: string;
    source: "whatsapp" | "web";
    expiredAt?: TimestampStub | undefined;
    fulfilledAt?: TimestampStub | undefined;
    fulfilledByUid?: string | undefined;
    responseId?: string | undefined;
    communityName?: string | undefined;
    introductionRequestedFor?: string[] | undefined;
    introductionBlurb?: string | undefined;
    introductionSentTo?: string[] | undefined;
    introductionSentAt?: TimestampStub | undefined;
}, ("createdAt" | "updatedAt" | "communityId" | "id" | "description" | "source") | ("expiredAt" | "fulfilledAt" | "fulfilledByUid" | "responseId" | "communityName" | "introductionRequestedFor" | "introductionBlurb" | "introductionSentTo" | "introductionSentAt")>;

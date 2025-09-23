import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeCommunityFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    name: string;
    phoneNumber?: string | undefined;
    coverPictureStoragePath?: string | undefined;
    context?: string | undefined;
    botName?: string | undefined;
    knowledgeBase?: {
        title: string;
        summary: string;
    }[] | undefined;
    demoCallInstructions?: string | undefined;
}, ("createdAt" | "updatedAt" | "name") | ("phoneNumber" | "coverPictureStoragePath" | "context" | "botName" | "knowledgeBase" | "demoCallInstructions")>;

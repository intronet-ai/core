import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAskFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    responseId: string;
    communityId: string;
    text: string;
    tags: string[];
}, "createdAt" | "updatedAt" | "responseId" | "communityId" | "text" | "tags">;

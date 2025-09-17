import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAskFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    id: string;
    description: string;
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    expiredAt?: TimestampStub | undefined;
    fulfilledAt?: TimestampStub | undefined;
    fulfilledByUid?: string | undefined;
}, ("id" | "description" | "createdAt" | "updatedAt") | ("expiredAt" | "fulfilledAt" | "fulfilledByUid")>;

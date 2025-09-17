import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeCommunityFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    name: string;
    coverPictureStoragePath?: string | undefined;
}, "coverPictureStoragePath" | ("createdAt" | "updatedAt" | "name")>;

import * as Factory from 'factory.ts';
import { CommunityValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeCommunityFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<CommunityValue, keyof CommunityValue>;

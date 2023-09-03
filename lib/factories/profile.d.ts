import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema/profile';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeProfileFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<ProfileValue, keyof ProfileValue>;

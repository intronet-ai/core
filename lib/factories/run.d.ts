import * as Factory from 'factory.ts';
import { RunValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeRunFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<RunValue, keyof RunValue>;

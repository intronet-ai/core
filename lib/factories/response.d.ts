import * as Factory from 'factory.ts';
import { ResponseValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeResponseFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<ResponseValue, keyof ResponseValue>;

import * as Factory from 'factory.ts';
import { AskValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAskFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<AskValue, keyof AskValue>;

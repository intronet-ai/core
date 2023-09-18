import * as Factory from 'factory.ts';
import { MailValue } from '../schema/mail';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeMailFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<MailValue<any>, keyof MailValue<any>>;

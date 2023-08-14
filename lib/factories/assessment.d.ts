import * as Factory from 'factory.ts';
import { AssessmentValue } from '../schema/assessment';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAssessmentFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<AssessmentValue, keyof AssessmentValue>;

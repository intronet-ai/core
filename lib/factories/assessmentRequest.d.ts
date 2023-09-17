import * as Factory from 'factory.ts';
import { AssessmentRequestValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAssessmentRequestFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<AssessmentRequestValue, keyof AssessmentRequestValue>;

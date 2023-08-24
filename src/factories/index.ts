import { TimestampStub } from '../utils/TimestampStub';
import { makeAssessmentFactory } from './assessment';
import { makeAssessmentRequestFactory } from './assessmentRequest';
import { makeResponseFactory } from './response';
import { makeRunFactory } from './run';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampStub) {
  return {
    assessmentFactory: makeAssessmentFactory(TimestampKlass),
    assessmentRequestFactory: makeAssessmentRequestFactory(TimestampKlass),
    responseFactory: makeResponseFactory(TimestampKlass),
    runFactory: makeRunFactory(TimestampKlass),
  };
}

export { exampleLinkedinProfile } from './exampleData/linkedin';

// We also directly export all factories, using our "TimestampStub" class, for unit testing in this
// library
export const { responseFactory } = makeFactories(TimestampStub);

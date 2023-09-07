import { TimestampStub } from '../utils/TimestampStub';
import { makeAssessmentFactory } from './assessment';
import { makeAssessmentRequestFactory } from './assessmentRequest';
import { makeCommunityFactory } from './community';
import { makeProfileFactory } from './profile';
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
    communityFactory: makeCommunityFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
  };
}

export { exampleLinkedinProfile } from './exampleData/linkedin';

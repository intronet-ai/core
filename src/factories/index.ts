import { TimestampStub } from '../utils/TimestampStub';
import { makeAnnouncementFactory, makeAnnouncementRecipientFactory } from './announcement';
import { makeAskFactory } from './ask';
import { makeAssessmentFactory } from './assessment';
import { makeAssessmentRequestFactory } from './assessmentRequest';
import { makeCommunityFactory } from './community';
import { makeMailFactory } from './mail';
import { makeResponseFactory } from './response';
import { makeRunFactory } from './run';
import { makeUserFactory } from './user';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampStub) {
  return {
    announcementFactory: makeAnnouncementFactory(TimestampKlass),
    announcementRecipientFactory: makeAnnouncementRecipientFactory(TimestampKlass),
    askFactory: makeAskFactory(TimestampKlass),
    assessmentFactory: makeAssessmentFactory(TimestampKlass),
    assessmentRequestFactory: makeAssessmentRequestFactory(TimestampKlass),
    responseFactory: makeResponseFactory(TimestampKlass),
    runFactory: makeRunFactory(TimestampKlass),
    communityFactory: makeCommunityFactory(TimestampKlass),
    profileFactory: makeUserFactory(TimestampKlass),
    mailFactory: makeMailFactory(TimestampKlass),
  };
}

export { exampleLinkedinUser } from './exampleData/linkedin';
export { exampleMail } from './exampleData/mail';
export { exampleMailgunWebhook } from './exampleData/mailgunWebhook';

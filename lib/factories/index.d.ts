import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    askFactory: import("factory.ts").Factory<import("..").AskValue, keyof import("..").AskValue>;
    assessmentFactory: import("factory.ts").Factory<import("..").AssessmentValue, keyof import("..").AssessmentValue>;
    assessmentRequestFactory: import("factory.ts").Factory<import("..").AssessmentRequestValue, keyof import("..").AssessmentRequestValue>;
    responseFactory: import("factory.ts").Factory<import("..").ResponseValue, keyof import("..").ResponseValue>;
    runFactory: import("factory.ts").Factory<import("..").RunValue, keyof import("..").RunValue>;
    communityFactory: import("factory.ts").Factory<import("..").CommunityValue, keyof import("..").CommunityValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
};
export { exampleLinkedinProfile } from './exampleData/linkedin';
export { exampleMail } from './exampleData/mail';
export { exampleMailgunWebhook } from './exampleData/mailgunWebhook';

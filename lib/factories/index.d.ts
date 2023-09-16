import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    assessmentFactory: import("factory.ts").Factory<import("..").AssessmentValue, keyof import("..").AssessmentValue>;
    originalAssessmentRequestFactory: import("factory.ts").Factory<import("..").OriginalAssessmentRequest, "createdAt" | "updatedAt" | "seekerResponseId" | "runId" | "providerResponseIds" | "type" | "prompt" | "communityId" | "systemMessage" | "sentAt" | "rawResponse" | "responseReceivedAt" | "approved" | "error" | "actualApiCostCents" | "estimatedApiCostCents">;
    responseFactory: import("factory.ts").Factory<import("..").ResponseValue, keyof import("..").ResponseValue>;
    runFactory: import("factory.ts").Factory<import("..").RunValue, keyof import("..").RunValue>;
    communityFactory: import("factory.ts").Factory<import("..").CommunityValue, keyof import("..").CommunityValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
};
export { exampleLinkedinProfile } from './exampleData/linkedin';
export { exampleMail } from './exampleData/mail';

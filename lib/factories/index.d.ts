import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    assessmentFactory: import("factory.ts").Factory<import("..").AssessmentValue, keyof import("..").AssessmentValue>;
    assessmentRequestFactory: import("factory.ts").Factory<import("..").AssessmentRequestValue, keyof import("..").AssessmentRequestValue>;
    responseFactory: import("factory.ts").Factory<import("..").ResponseValue, keyof import("..").ResponseValue>;
    runFactory: import("factory.ts").Factory<import("..").RunValue, keyof import("..").RunValue>;
};
export declare const responseFactory: import("factory.ts").Factory<import("..").ResponseValue, keyof import("..").ResponseValue>;

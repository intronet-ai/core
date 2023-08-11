import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    responseFactory: import("factory.ts").Factory<import("..").ResponseValue, keyof import("..").ResponseValue>;
};
export declare const responseFactory: import("factory.ts").Factory<import("..").ResponseValue, keyof import("..").ResponseValue>;

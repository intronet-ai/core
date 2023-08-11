"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseFactory = exports.makeFactories = void 0;
const TimestampStub_1 = require("../utils/TimestampStub");
const response_1 = require("./response");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return {
        responseFactory: (0, response_1.makeResponseFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;
// We also directly export all factories, using our "TimestampStub" class, for unit testing in this
// library
exports.responseFactory = makeFactories(TimestampStub_1.TimestampStub).responseFactory;

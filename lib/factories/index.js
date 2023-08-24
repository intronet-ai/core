"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseFactory = exports.exampleLinkedinProfile = exports.makeFactories = void 0;
const TimestampStub_1 = require("../utils/TimestampStub");
const assessment_1 = require("./assessment");
const assessmentRequest_1 = require("./assessmentRequest");
const response_1 = require("./response");
const run_1 = require("./run");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return {
        assessmentFactory: (0, assessment_1.makeAssessmentFactory)(TimestampKlass),
        assessmentRequestFactory: (0, assessmentRequest_1.makeAssessmentRequestFactory)(TimestampKlass),
        responseFactory: (0, response_1.makeResponseFactory)(TimestampKlass),
        runFactory: (0, run_1.makeRunFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;
var linkedin_1 = require("./exampleData/linkedin");
Object.defineProperty(exports, "exampleLinkedinProfile", { enumerable: true, get: function () { return linkedin_1.exampleLinkedinProfile; } });
// We also directly export all factories, using our "TimestampStub" class, for unit testing in this
// library
exports.responseFactory = makeFactories(TimestampStub_1.TimestampStub).responseFactory;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleMailgunWebhook = exports.exampleMail = exports.exampleLinkedinProfile = exports.makeFactories = void 0;
const ask_1 = require("./ask");
const assessment_1 = require("./assessment");
const assessmentRequest_1 = require("./assessmentRequest");
const community_1 = require("./community");
const profile_1 = require("./profile");
const response_1 = require("./response");
const run_1 = require("./run");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return {
        askFactory: (0, ask_1.makeAskFactory)(TimestampKlass),
        assessmentFactory: (0, assessment_1.makeAssessmentFactory)(TimestampKlass),
        assessmentRequestFactory: (0, assessmentRequest_1.makeAssessmentRequestFactory)(TimestampKlass),
        responseFactory: (0, response_1.makeResponseFactory)(TimestampKlass),
        runFactory: (0, run_1.makeRunFactory)(TimestampKlass),
        communityFactory: (0, community_1.makeCommunityFactory)(TimestampKlass),
        profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;
var linkedin_1 = require("./exampleData/linkedin");
Object.defineProperty(exports, "exampleLinkedinProfile", { enumerable: true, get: function () { return linkedin_1.exampleLinkedinProfile; } });
var mail_1 = require("./exampleData/mail");
Object.defineProperty(exports, "exampleMail", { enumerable: true, get: function () { return mail_1.exampleMail; } });
var mailgunWebhook_1 = require("./exampleData/mailgunWebhook");
Object.defineProperty(exports, "exampleMailgunWebhook", { enumerable: true, get: function () { return mailgunWebhook_1.exampleMailgunWebhook; } });

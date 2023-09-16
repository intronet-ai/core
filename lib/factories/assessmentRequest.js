"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAssessmentRequestFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeAssessmentRequestFactory = (TimestampKlass) => Factory.makeFactory({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    seekerResponseId: 'abc-123',
    providerResponseIds: ['def456', 'ghi789'],
    sentAt: null,
    responseReceivedAt: null,
    error: null,
    communityId: 'abc-123',
    runId: 'def-456',
    type: 'original',
    prompt: JSON.stringify({
        seeker: {
            id: 'abc-123',
            lookingFor: 'Help establishing a latin-speaking kindergarten',
            workingOn: "Children's education",
        },
        providers: [
            {
                id: 'def456',
                canOffer: 'Help with personal assisstants',
                workingOn: 'Chinese hot water bottle exports',
            },
            {
                id: 'ghi789',
                canOffer: 'Mongolian history lessons',
                workingOn: 'Learning arabic',
            },
        ],
    }),
    systemMessage: `Assess community members' potential to assist each other.
    You'll get details of a "seeker" needing help, and "providers" who might assist. Evaluate each provider's potential to help the seeker, giving a numerical score and explanation.
    Score from 0 to 1, where 1 means the provider can definitely help, and 0 means they can't.
    1 = certain the provider can assist
    0 = certain the provider can't assist
    Your response should follow this exact JSON format:
    {
    "PROVIDER-1-ID": { score: 1, explanation: "PROVIDER-1-NAME can help SEEKER-NAME because ..." },
    "PROVIDER-2-ID": { score: 0.2, explanation: "PROVIDER-2-NAME might assist SEEKER-NAME because ..." },
    ...`,
});
exports.makeAssessmentRequestFactory = makeAssessmentRequestFactory;

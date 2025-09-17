"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for AssessmentValue
exports.assessmentValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    assessmentRequestId: zod_1.z.string(),
    seekerResponseId: zod_1.z.string(),
    seekerAskId: zod_1.z.string(),
    providerResponseId: zod_1.z.string(),
    runId: zod_1.z.string(),
    score: zod_1.z.number(),
    humanScore: zod_1.z.number().optional(),
    explanation: zod_1.z.string(),
    isSelected: zod_1.z.boolean().optional(),
    introRequestedAt: common_1.timestampStubSchema.optional(),
    introRequestText: zod_1.z.string().optional(),
    communityId: zod_1.z.string(),
    communityName: zod_1.z.string().optional(),
    providerName: zod_1.z.string().optional(),
    providerEmail: zod_1.z.string().optional(),
    providerHeadline: zod_1.z.string().optional(),
    providerPhotoStoragePath: zod_1.z.string().optional(),
    seekerName: zod_1.z.string().optional(),
    seekerEmail: zod_1.z.string().optional(),
    askSummary: zod_1.z.string().optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentRequestSchema = void 0;
const zod_1 = require("zod");
const chatgpt_1 = require("./utils/chatgpt");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for AssessmentRequest
exports.assessmentRequestSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    prompt: zod_1.z.string(),
    runId: zod_1.z.string(),
    communityId: zod_1.z.string(),
    seekerResponseId: zod_1.z.string(),
    seekerAskId: zod_1.z.string(),
    providerResponseIds: zod_1.z.array(zod_1.z.string()),
    systemMessage: zod_1.z.string(),
    sentAt: timestamps_1.timestampStubSchema.nullable(),
    rawResponse: chatgpt_1.chatGptCompletionResultSchema.optional(),
    responseReceivedAt: timestamps_1.timestampStubSchema.nullable(),
    approved: zod_1.z.literal(true).optional(),
    error: zod_1.z.string().nullable(),
    actualApiCostCents: zod_1.z.number().optional(),
    estimatedApiCostCents: zod_1.z.number().optional(),
});

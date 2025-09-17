"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentRequestValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for LLMCompletionResult
const llmCompletionResultSchema = zod_1.z.object({
    response: zod_1.z.string(),
    costCents: zod_1.z.number(),
    model: zod_1.z.string(),
});
// Zod schema for ChatGPTCompletionResult
const chatGptCompletionResultSchema = zod_1.z.object({
    created: zod_1.z.number(),
    usage: zod_1.z.object({
        completion_tokens: zod_1.z.number(),
        prompt_tokens: zod_1.z.number(),
        total_tokens: zod_1.z.number(),
    }),
    model: zod_1.z.literal('gpt-4-0613'),
    id: zod_1.z.string(),
    choices: zod_1.z.tuple([zod_1.z.object({
            finish_reason: zod_1.z.literal('stop'),
            index: zod_1.z.literal(0),
            message: zod_1.z.object({ content: zod_1.z.string() }),
        })]),
    object: zod_1.z.literal('chat.completion'),
});
// Zod schema for AssessmentRequestValue
exports.assessmentRequestValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    prompt: zod_1.z.string(),
    runId: zod_1.z.string(),
    communityId: zod_1.z.string(),
    seekerResponseId: zod_1.z.string(),
    seekerAskId: zod_1.z.string(),
    providerResponseIds: zod_1.z.array(zod_1.z.string()),
    systemMessage: zod_1.z.string(),
    sentAt: common_1.timestampStubSchema.nullable(),
    // Deprecated
    rawResponse: chatGptCompletionResultSchema.optional(),
    // Replaced with:
    response: llmCompletionResultSchema.optional(),
    responseReceivedAt: common_1.timestampStubSchema.nullable(),
    approved: zod_1.z.literal(true).optional(),
    error: zod_1.z.string().nullable(),
    actualApiCostCents: zod_1.z.number().optional(),
    estimatedApiCostCents: zod_1.z.number().optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGptCompletionResultSchema = exports.llmCompletionResultSchema = void 0;
const zod_1 = require("zod");
// Zod schema for LLMCompletionResult
exports.llmCompletionResultSchema = zod_1.z.object({
    response: zod_1.z.string(),
    costCents: zod_1.z.number(),
    model: zod_1.z.string(),
});
// Zod schema for ChatGPTCompletionResult
exports.chatGptCompletionResultSchema = zod_1.z.object({
    created: zod_1.z.number(),
    usage: zod_1.z.object({
        completion_tokens: zod_1.z.number(),
        prompt_tokens: zod_1.z.number(),
        total_tokens: zod_1.z.number(),
    }),
    model: zod_1.z.literal('gpt-4-0613'),
    id: zod_1.z.string(),
    choices: zod_1.z.tuple([
        zod_1.z.object({
            finish_reason: zod_1.z.literal('stop'),
            index: zod_1.z.literal(0),
            message: zod_1.z.object({ content: zod_1.z.string() }),
        }),
    ]),
    object: zod_1.z.literal('chat.completion'),
});

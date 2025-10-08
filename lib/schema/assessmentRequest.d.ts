import { z } from 'zod';
import { chatGptCompletionResultSchema } from './utils/chatgpt';
export declare const assessmentRequestSchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    prompt: z.ZodString;
    runId: z.ZodString;
    communityId: z.ZodString;
    seekerResponseId: z.ZodString;
    seekerAskId: z.ZodString;
    providerResponseIds: z.ZodArray<z.ZodString, "many">;
    systemMessage: z.ZodString;
    sentAt: z.ZodNullable<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    rawResponse: z.ZodOptional<z.ZodObject<{
        created: z.ZodNumber;
        usage: z.ZodObject<{
            completion_tokens: z.ZodNumber;
            prompt_tokens: z.ZodNumber;
            total_tokens: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        }, {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        }>;
        model: z.ZodLiteral<"gpt-4-0613">;
        id: z.ZodString;
        choices: z.ZodTuple<[z.ZodObject<{
            finish_reason: z.ZodLiteral<"stop">;
            index: z.ZodLiteral<0>;
            message: z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }, {
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }>], null>;
        object: z.ZodLiteral<"chat.completion">;
    }, "strip", z.ZodTypeAny, {
        object: "chat.completion";
        id: string;
        model: "gpt-4-0613";
        created: number;
        usage: {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        };
        choices: [{
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }];
    }, {
        object: "chat.completion";
        id: string;
        model: "gpt-4-0613";
        created: number;
        usage: {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        };
        choices: [{
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }];
    }>>;
    responseReceivedAt: z.ZodNullable<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    approved: z.ZodOptional<z.ZodLiteral<true>>;
    error: z.ZodNullable<z.ZodString>;
    actualApiCostCents: z.ZodOptional<z.ZodNumber>;
    estimatedApiCostCents: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    sentAt: import("../utils/TimestampStub").TimestampStub | null;
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    prompt: string;
    providerResponseIds: string[];
    systemMessage: string;
    responseReceivedAt: import("../utils/TimestampStub").TimestampStub | null;
    error: string | null;
    rawResponse?: {
        object: "chat.completion";
        id: string;
        model: "gpt-4-0613";
        created: number;
        usage: {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        };
        choices: [{
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }];
    } | undefined;
    approved?: true | undefined;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    sentAt: import("../utils/TimestampStub").TimestampStub | null;
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    prompt: string;
    providerResponseIds: string[];
    systemMessage: string;
    responseReceivedAt: import("../utils/TimestampStub").TimestampStub | null;
    error: string | null;
    rawResponse?: {
        object: "chat.completion";
        id: string;
        model: "gpt-4-0613";
        created: number;
        usage: {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        };
        choices: [{
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }];
    } | undefined;
    approved?: true | undefined;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}>;
export type AssessmentRequest = z.infer<typeof assessmentRequestSchema>;
export type ChatGPTCompletionResult = z.infer<typeof chatGptCompletionResultSchema>;

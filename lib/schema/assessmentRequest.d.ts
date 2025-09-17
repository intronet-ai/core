import { z } from 'zod';
import { chatGptCompletionResultSchema, llmCompletionResultSchema } from './utils/chatgpt';
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
    response: z.ZodOptional<z.ZodObject<{
        response: z.ZodString;
        costCents: z.ZodNumber;
        model: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        response: string;
        costCents: number;
        model: string;
    }, {
        response: string;
        costCents: number;
        model: string;
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
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    prompt: string;
    providerResponseIds: string[];
    systemMessage: string;
    sentAt: import("../utils/TimestampStub").TimestampStub | null;
    responseReceivedAt: import("../utils/TimestampStub").TimestampStub | null;
    error: string | null;
    response?: {
        response: string;
        costCents: number;
        model: string;
    } | undefined;
    approved?: true | undefined;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    prompt: string;
    providerResponseIds: string[];
    systemMessage: string;
    sentAt: import("../utils/TimestampStub").TimestampStub | null;
    responseReceivedAt: import("../utils/TimestampStub").TimestampStub | null;
    error: string | null;
    response?: {
        response: string;
        costCents: number;
        model: string;
    } | undefined;
    approved?: true | undefined;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}>;
export type AssessmentRequest = z.infer<typeof assessmentRequestSchema>;
export type LLMCompletionResult = z.infer<typeof llmCompletionResultSchema>;
export type ChatGPTCompletionResult = z.infer<typeof chatGptCompletionResultSchema>;

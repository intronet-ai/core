import { z } from 'zod';
export declare const llmCompletionResultSchema: z.ZodObject<{
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
}>;
export declare const chatGptCompletionResultSchema: z.ZodObject<{
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
}>;

import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for LLMCompletionResult
const llmCompletionResultSchema = z.object({
  response: z.string(),
  costCents: z.number(),
  model: z.string(),
});

// Zod schema for ChatGPTCompletionResult
const chatGptCompletionResultSchema = z.object({
  created: z.number(),
  usage: z.object({
    completion_tokens: z.number(),
    prompt_tokens: z.number(),
    total_tokens: z.number(),
  }),
  model: z.literal('gpt-4-0613'),
  id: z.string(),
  choices: z.tuple([z.object({
    finish_reason: z.literal('stop'),
    index: z.literal(0),
    message: z.object({ content: z.string() }),
  })]),
  object: z.literal('chat.completion'),
});

// Zod schema for AssessmentRequestValue
export const assessmentRequestValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  prompt: z.string(),
  runId: z.string(),
  communityId: z.string(),
  seekerResponseId: z.string(),
  seekerAskId: z.string(),
  providerResponseIds: z.array(z.string()),
  systemMessage: z.string(),
  sentAt: timestampStubSchema.nullable(),
  // Deprecated
  rawResponse: chatGptCompletionResultSchema.optional(),
  // Replaced with:
  response: llmCompletionResultSchema.optional(),
  responseReceivedAt: timestampStubSchema.nullable(),
  approved: z.literal(true).optional(),
  error: z.string().nullable(),
  actualApiCostCents: z.number().optional(),
  estimatedApiCostCents: z.number().optional(),
});

// TypeScript types inferred from zod schemas
export type AssessmentRequestValue = z.infer<typeof assessmentRequestValueSchema>;
export type LLMCompletionResult = z.infer<typeof llmCompletionResultSchema>;
export type ChatGPTCompletionResult = z.infer<typeof chatGptCompletionResultSchema>;

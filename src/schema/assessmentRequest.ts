import { z } from 'zod';
import { chatGptCompletionResultSchema } from './utils/chatgpt';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for AssessmentRequest
export const assessmentRequestSchema = z.object({
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
  rawResponse: chatGptCompletionResultSchema.optional(),
  responseReceivedAt: timestampStubSchema.nullable(),
  approved: z.literal(true).optional(),
  error: z.string().nullable(),
  actualApiCostCents: z.number().optional(),
  estimatedApiCostCents: z.number().optional(),
});

// TypeScript types inferred from zod schemas
export type AssessmentRequest = z.infer<typeof assessmentRequestSchema>;
export type ChatGPTCompletionResult = z.infer<
  typeof chatGptCompletionResultSchema
>;

import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for Model type
const modelSchema = z.literal('original'); // | z.literal('differentiated-asks') when needed

// Zod schema for RunValue
export const runValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  assessmentRequestCount: z.number(),
  assessmentCount: z.number(),
  model: modelSchema,
  responseCount: z.number(),
  communityId: z.string(),
  batchSize: z.number(),
  apiRequestsCompletedAt: timestampStubSchema.nullable(),
  introductionsCompletedAt: timestampStubSchema.nullable(),
  approvedAt: timestampStubSchema.nullable(),
  estimatedApiCostCents: z.number().optional(),
  actualApiCostCents: z.number().optional(),
  // type: z.enum(['extracting_requests', 'matching']).optional(), // when needed
});

// TypeScript types inferred from zod schemas
export type Model = z.infer<typeof modelSchema>;
export type RunValue = z.infer<typeof runValueSchema>;

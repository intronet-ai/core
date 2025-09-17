import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Assessment
export const assessmentSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  assessmentRequestId: z.string(),
  seekerResponseId: z.string(),
  seekerAskId: z.string(),
  providerResponseId: z.string(),
  runId: z.string(),
  score: z.number(),
  humanScore: z.number().optional(),
  explanation: z.string(),
  isSelected: z.boolean().optional(),
  introRequestedAt: timestampStubSchema.optional(),
  introRequestText: z.string().optional(),
  communityId: z.string(),
  communityName: z.string().optional(),
  providerName: z.string().optional(),
  providerEmail: z.string().optional(),
  providerHeadline: z.string().optional(),
  providerPhotoStoragePath: z.string().optional(),
  seekerName: z.string().optional(),
  seekerEmail: z.string().optional(),
  askSummary: z.string().optional(),
});

// TypeScript type inferred from zod schema
export type Assessment = z.infer<typeof assessmentSchema>;

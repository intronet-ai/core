import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Ask
export const askSchema = z.object({
  id: z.string(),
  description: z.string(),
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  expiredAt: timestampStubSchema.optional(),
  fulfilledAt: timestampStubSchema.optional(),
  fulfilledByUid: z.string().optional(),
  source: z.enum(['whatsapp', 'web']),
  responseId: z.string().optional(),
  communityId: z.string(),
  communityName: z.string().optional(),
});

// TypeScript type inferred from zod schema
export type Ask = z.infer<typeof askSchema>;

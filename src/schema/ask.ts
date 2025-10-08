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
  // Introduction request tracking
  introductionRequestedFor: z.array(z.string()).optional(), // User IDs intro was requested for
  introductionBlurb: z.string().optional(), // Custom blurb for introduction
  introductionSentTo: z.array(z.string()).optional(), // User IDs intro was actually sent to
  introductionSentAt: timestampStubSchema.optional(), // When intro was sent
});

// TypeScript type inferred from zod schema
export type Ask = z.infer<typeof askSchema>;

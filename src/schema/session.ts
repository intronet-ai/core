import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Session
export const sessionSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  communityId: z.string(),
  phoneNumber: z.string().optional(), // WhatsApp phone number for this community
  expiresAt: timestampStubSchema,
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  analyzedAt: timestampStubSchema.optional(), // When the session was analyzed for asks/offers
});

// TypeScript type inferred from zod schema
export type Session = z.infer<typeof sessionSchema>;

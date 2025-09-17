import { z } from 'zod';
import { linkedinProfileSchema } from './linkedin';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Response
export const responseSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  finalizedAt: timestampStubSchema.nullable(),
  name: z.string(),
  email: z.string(),
  communityId: z.string(),
  uid: z.string().nullable(),
  helpWanted: z.string(),
  canOffer: z.string(),
  linkedinProfileUrl: z.string().optional(),
  linkedinProfile: linkedinProfileSchema.optional(),
});

// TypeScript types inferred from zod schemas
export type Response = z.infer<typeof responseSchema>;

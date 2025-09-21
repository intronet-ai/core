import { z } from 'zod';
import { linkedinUserSchema } from './linkedin';
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
  linkedinUserUrl: z.string().optional(),
  linkedinUser: linkedinUserSchema.optional(),
});

// TypeScript types inferred from zod schemas
export type Response = z.infer<typeof responseSchema>;

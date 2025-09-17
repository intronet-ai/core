import { z } from 'zod';
import { timestampStubSchema } from './common';
import { linkedinProfileSchema } from './linkedin';

// Zod schema for ResponseValue
export const responseValueSchema = z.object({
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
export type ResponseValue = z.infer<typeof responseValueSchema>;

import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for LinkedinProfile
const linkedinProfileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  photoUrl: z.string(),
  linkedinProfileUrl: z.string(),
});

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
export type LinkedinProfile = z.infer<typeof linkedinProfileSchema>;
export type ResponseValue = z.infer<typeof responseValueSchema>;

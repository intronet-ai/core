import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

type EmailPreferenceKey = 'emailInsideCommunities' | 'emailOutsideCommunities';

// Zod schema for email preferences
const emailPreferencesSchema = z.object({
  emailInsideCommunities: z.boolean(),
  emailOutsideCommunities: z.boolean(),
});

// Zod schema for Profile
export const profileSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  uid: z.string(),
  helpWanted: z.string().optional(),
  canOffer: z.string().optional(),
  name: z.string(),
  headline: z.string().optional(),
  photoStoragePath: z.string().optional(),
  emailPreferences: emailPreferencesSchema.optional(),
});

// TypeScript type inferred from zod schema
export type Profile = z.infer<typeof profileSchema>;

export const DEFAULT_EMAIL_PREFERENCES: {
  [key in EmailPreferenceKey]: boolean;
} = {
  emailInsideCommunities: true,
  emailOutsideCommunities: true,
};

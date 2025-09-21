import { z } from 'zod';
import { linkedinUserSchema } from './linkedin';
import { timestampStubSchema } from './utils/timestamps';

type EmailPreferenceKey = 'emailInsideCommunities' | 'emailOutsideCommunities';

// Zod schema for email preferences
const emailPreferencesSchema = z.object({
  emailInsideCommunities: z.boolean(),
  emailOutsideCommunities: z.boolean(),
});

// Zod schema for User
export const userSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  uid: z.string(),
  helpWanted: z.string().optional(),
  canOffer: z.string().optional(),
  name: z.string(),
  headline: z.string().optional(),
  photoStoragePath: z.string().optional(),
  phoneNumber: z.string().optional(),
  emailPreferences: emailPreferencesSchema.optional(),
  linkedinUser: linkedinUserSchema.optional(),
  communityId: z.string(), // Added for community association
  isCoordinator: z.boolean().optional(), // Added for community coordinator role
});

// TypeScript type inferred from zod schema
export type User = z.infer<typeof userSchema>;

export const DEFAULT_EMAIL_PREFERENCES: {
  [key in EmailPreferenceKey]: boolean;
} = {
  emailInsideCommunities: true,
  emailOutsideCommunities: true,
};

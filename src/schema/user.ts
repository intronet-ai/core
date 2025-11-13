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
  name: z.string(),
  firstName: z.string().optional(), // Extracted from name field
  communityId: z.string().optional(), // Primary community association
  photoStoragePath: z.string().optional(),
  phoneNumber: z.string().optional(),
  emailPreferences: emailPreferencesSchema.optional(),
  linkedinUser: linkedinUserSchema.optional(),
  karma: z.number().optional().default(0), // Karma for requesting/accepting introductions
  invitedByUid: z.string().optional(), // UID of the user who invited them
});

// TypeScript type inferred from zod schema
export type User = z.infer<typeof userSchema>;

export const DEFAULT_EMAIL_PREFERENCES: {
  [key in EmailPreferenceKey]: boolean;
} = {
  emailInsideCommunities: true,
  emailOutsideCommunities: true,
};

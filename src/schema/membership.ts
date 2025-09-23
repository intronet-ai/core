import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

export const membershipSchema = z.object({
  invitationCode: z.string(),
  isCoordinator: z.boolean(),
  uid: z.string(),
  communityId: z.string(),
  createdAt: timestampStubSchema.optional(),
  updatedAt: timestampStubSchema.optional(),
  acceptedAt: timestampStubSchema.optional(),
  revokedAt: timestampStubSchema.optional(),
});

export type Membership = z.infer<typeof membershipSchema>;

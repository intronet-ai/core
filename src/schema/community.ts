import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for CommunityValue
export const communityValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  name: z.string(),
  coverPictureStoragePath: z.string().optional(),
});

// TypeScript type inferred from zod schema
export type CommunityValue = z.infer<typeof communityValueSchema>;

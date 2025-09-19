import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Community
export const CommunitySchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  name: z.string(),
  coverPictureStoragePath: z.string().optional(),
  context: z.string().optional(),
  botName: z.string().optional(),
});

// TypeScript type inferred from zod schema
export type Community = z.infer<typeof CommunitySchema>;

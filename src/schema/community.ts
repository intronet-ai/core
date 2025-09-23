import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Community
export const CommunitySchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  name: z.string(),
  phoneNumber: z.string().optional(),
  coverPictureStoragePath: z.string().optional(),
  context: z.string().optional(),
  botName: z.string().optional(),
  knowledgeBase: z.array(z.object({
    title: z.string(),
    summary: z.string(),
  })).optional(),
  demoCallInstructions: z.string().optional(),
});

// TypeScript type inferred from zod schema
export type Community = z.infer<typeof CommunitySchema>;

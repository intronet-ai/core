import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for AskValue
export const askValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  responseId: z.string(),
  communityId: z.string(),
  text: z.string(),
  tags: z.array(z.string()),
});

// TypeScript type inferred from zod schema
export type AskValue = z.infer<typeof askValueSchema>;

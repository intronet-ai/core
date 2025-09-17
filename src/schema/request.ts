import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for RequestValue
export const requestValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  type: z.enum(['ask', 'offer']),
  text: z.string(),
  responseId: z.string(), // The response identifies the user who made the request.
});

// TypeScript type inferred from zod schema
export type RequestValue = z.infer<typeof requestValueSchema>;

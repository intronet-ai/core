import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Request
export const requestSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  type: z.enum(['ask', 'offer']),
  text: z.string(),
  responseId: z.string(), // The response identifies the user who made the request.
});

// TypeScript type inferred from zod schema
export type Request = z.infer<typeof requestSchema>;

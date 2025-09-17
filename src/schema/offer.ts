import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Offer
export const offerSchema = z.object({
  id: z.string(),
  description: z.string(),
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  expiredAt: timestampStubSchema.optional(),
});

// TypeScript type inferred from zod schema
export type Offer = z.infer<typeof offerSchema>;

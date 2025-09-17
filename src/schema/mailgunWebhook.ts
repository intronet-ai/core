import { z } from 'zod';
import { timestampStubSchema } from './common';
import { MailgunEvent } from '../factories/exampleData/mailgunWebhook';

// Zod schema for signature object
const signatureSchema = z.object({
  signature: z.string(),
  timestamp: z.string(),
  token: z.string(),
});

// For now, we'll use z.any() for MailgunEvent since it's a complex external type
// In the future, this could be converted to a proper zod schema
const mailgunEventSchema = z.any() as z.ZodType<MailgunEvent>;

// Zod schema for MailgunWebhookValue
export const mailgunWebhookValueSchema = z.object({
  'event-data': mailgunEventSchema,
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  signature: signatureSchema,
});

// TypeScript type inferred from zod schema
export type MailgunWebhookValue = z.infer<typeof mailgunWebhookValueSchema>;

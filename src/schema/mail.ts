import { z } from 'zod';
import { timestampStubSchema } from './common';
import { MailgunEvent } from '../factories/exampleData/mailgunWebhook';

// For now, we'll use z.any() for MailgunEvent since it's a complex external type
const mailgunEventSchema = z.any() as z.ZodType<MailgunEvent>;

// Zod schema for delivery info object
const deliveryInfoSchema = z.object({
  rejected: z.array(z.unknown()),
  response: z.string(),
  pending: z.array(z.unknown()),
  messageId: z.string(),
  accepted: z.array(z.string()),
});

// Zod schema for delivery object
const deliverySchema = z.object({
  startTime: timestampStubSchema,
  error: z.null(),
  leaseExpireTime: z.null(),
  state: z.string(),
  endTime: timestampStubSchema,
  info: deliveryInfoSchema,
  attempts: z.number(),
});

// Zod schema for template object (generic)
const templateSchema = <T extends z.ZodTypeAny>(dataSchema: T) => z.object({
  data: dataSchema,
  name: z.string(),
});

// Zod schema for MailValue (generic)
export const mailValueSchema = <T extends z.ZodTypeAny>(dataSchema: T) => z.object({
  // These properties are provided by the firebase mail extension...
  template: templateSchema(dataSchema),
  to: z.string(),
  delivery: deliverySchema,
  // ... while these are provided by the mailgun event webhook (we manually add them to mail docs)
  html: z.string().optional(),
  subject: z.string().optional(),
  events: z.array(mailgunEventSchema).optional(),
  eventsSummary: z.record(z.string(), timestampStubSchema).optional(),
});

// TypeScript type inferred from zod schema (generic)
export type MailValue<T> = {
  template: {
    data: T;
    name: string;
  };
  to: string;
  delivery: {
    startTime: z.infer<typeof timestampStubSchema>;
    error: null;
    leaseExpireTime: null;
    state: string;
    endTime: z.infer<typeof timestampStubSchema>;
    info: {
      rejected: unknown[];
      response: string;
      pending: unknown[];
      messageId: string;
      accepted: string[];
    };
    attempts: number;
  };
  html?: string;
  subject?: string;
  events?: Array<MailgunEvent>;
  eventsSummary?: Record<string, z.infer<typeof timestampStubSchema>>;
};

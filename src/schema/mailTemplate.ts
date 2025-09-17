import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for MailTemplateValue
export const mailTemplateValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  html: z.string(),
  subject: z.string(),
  requiredDataKeys: z.array(z.string()),
});

// TypeScript type inferred from zod schema
export type MailTemplateValue = z.infer<typeof mailTemplateValueSchema>;

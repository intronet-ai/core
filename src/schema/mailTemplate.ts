import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for MailTemplate
export const mailTemplateValueSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  html: z.string(),
  subject: z.string(),
  requiredDataKeys: z.array(z.string()),
});

// TypeScript type inferred from zod schema
export type MailTemplate = z.infer<typeof mailTemplateValueSchema>;

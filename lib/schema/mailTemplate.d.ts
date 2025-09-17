import { z } from 'zod';
export declare const mailTemplateValueSchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    html: z.ZodString;
    subject: z.ZodString;
    requiredDataKeys: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    html: string;
    subject: string;
    requiredDataKeys: string[];
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    html: string;
    subject: string;
    requiredDataKeys: string[];
}>;
export type MailTemplate = z.infer<typeof mailTemplateValueSchema>;

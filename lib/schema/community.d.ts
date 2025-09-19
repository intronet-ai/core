import { z } from 'zod';
export declare const CommunitySchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    name: z.ZodString;
    coverPictureStoragePath: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodString>;
    botName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    name: string;
    coverPictureStoragePath?: string | undefined;
    context?: string | undefined;
    botName?: string | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    name: string;
    coverPictureStoragePath?: string | undefined;
    context?: string | undefined;
    botName?: string | undefined;
}>;
export type Community = z.infer<typeof CommunitySchema>;

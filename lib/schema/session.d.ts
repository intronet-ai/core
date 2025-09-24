import { z } from 'zod';
export declare const sessionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    communityId: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    userId: string;
    expiresAt: import("../utils/TimestampStub").TimestampStub;
    id?: string | undefined;
    phoneNumber?: string | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    userId: string;
    expiresAt: import("../utils/TimestampStub").TimestampStub;
    id?: string | undefined;
    phoneNumber?: string | undefined;
}>;
export type Session = z.infer<typeof sessionSchema>;

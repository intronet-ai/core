import { z } from 'zod';
export declare const askSchema: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    expiredAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    fulfilledAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    fulfilledByUid: z.ZodOptional<z.ZodString>;
    source: z.ZodEnum<["whatsapp", "web"]>;
    responseId: z.ZodOptional<z.ZodString>;
    communityId: z.ZodString;
    communityName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    source: "whatsapp" | "web";
    communityId: string;
    expiredAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    fulfilledAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    fulfilledByUid?: string | undefined;
    responseId?: string | undefined;
    communityName?: string | undefined;
}, {
    id: string;
    description: string;
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    source: "whatsapp" | "web";
    communityId: string;
    expiredAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    fulfilledAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    fulfilledByUid?: string | undefined;
    responseId?: string | undefined;
    communityName?: string | undefined;
}>;
export type Ask = z.infer<typeof askSchema>;

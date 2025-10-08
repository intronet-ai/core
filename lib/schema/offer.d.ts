import { z } from 'zod';
export declare const offerSchema: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    expiredAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    description: string;
    expiredAt?: import("../utils/TimestampStub").TimestampStub | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    description: string;
    expiredAt?: import("../utils/TimestampStub").TimestampStub | undefined;
}>;
export type Offer = z.infer<typeof offerSchema>;

import { z } from 'zod';
export declare const requestSchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    type: z.ZodEnum<["ask", "offer"]>;
    text: z.ZodString;
    responseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    type: "ask" | "offer";
    responseId: string;
    text: string;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    type: "ask" | "offer";
    responseId: string;
    text: string;
}>;
export type Request = z.infer<typeof requestSchema>;

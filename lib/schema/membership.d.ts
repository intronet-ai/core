import { z } from 'zod';
export declare const membershipSchema: z.ZodObject<{
    invitationCode: z.ZodString;
    isCoordinator: z.ZodBoolean;
    uid: z.ZodString;
    communityId: z.ZodString;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    acceptedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    revokedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
}, "strip", z.ZodTypeAny, {
    communityId: string;
    uid: string;
    invitationCode: string;
    isCoordinator: boolean;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    acceptedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    revokedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
}, {
    communityId: string;
    uid: string;
    invitationCode: string;
    isCoordinator: boolean;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    acceptedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    revokedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
}>;
export type Membership = z.infer<typeof membershipSchema>;

import { z } from 'zod';
declare const linkedinProfileSchema: z.ZodObject<{
    name: z.ZodString;
    headline: z.ZodString;
    photoUrl: z.ZodString;
    linkedinProfileUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    headline: string;
    photoUrl: string;
    linkedinProfileUrl: string;
}, {
    name: string;
    headline: string;
    photoUrl: string;
    linkedinProfileUrl: string;
}>;
export declare const responseValueSchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    finalizedAt: z.ZodNullable<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    name: z.ZodString;
    email: z.ZodString;
    communityId: z.ZodString;
    uid: z.ZodNullable<z.ZodString>;
    helpWanted: z.ZodString;
    canOffer: z.ZodString;
    linkedinProfileUrl: z.ZodOptional<z.ZodString>;
    linkedinProfile: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        headline: z.ZodString;
        photoUrl: z.ZodString;
        linkedinProfileUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        headline: string;
        photoUrl: string;
        linkedinProfileUrl: string;
    }, {
        name: string;
        headline: string;
        photoUrl: string;
        linkedinProfileUrl: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    name: string;
    uid: string | null;
    helpWanted: string;
    canOffer: string;
    finalizedAt: import("../utils/TimestampStub").TimestampStub | null;
    email: string;
    linkedinProfileUrl?: string | undefined;
    linkedinProfile?: {
        name: string;
        headline: string;
        photoUrl: string;
        linkedinProfileUrl: string;
    } | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    communityId: string;
    name: string;
    uid: string | null;
    helpWanted: string;
    canOffer: string;
    finalizedAt: import("../utils/TimestampStub").TimestampStub | null;
    email: string;
    linkedinProfileUrl?: string | undefined;
    linkedinProfile?: {
        name: string;
        headline: string;
        photoUrl: string;
        linkedinProfileUrl: string;
    } | undefined;
}>;
export type LinkedinProfile = z.infer<typeof linkedinProfileSchema>;
export type ResponseValue = z.infer<typeof responseValueSchema>;
export {};

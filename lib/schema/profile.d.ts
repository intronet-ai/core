import { z } from 'zod';
type EmailPreferenceKey = 'emailInsideCommunities' | 'emailOutsideCommunities';
export declare const profileValueSchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    uid: z.ZodString;
    helpWanted: z.ZodOptional<z.ZodString>;
    canOffer: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    headline: z.ZodOptional<z.ZodString>;
    photoStoragePath: z.ZodOptional<z.ZodString>;
    emailPreferences: z.ZodOptional<z.ZodObject<{
        emailInsideCommunities: z.ZodBoolean;
        emailOutsideCommunities: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        emailInsideCommunities: boolean;
        emailOutsideCommunities: boolean;
    }, {
        emailInsideCommunities: boolean;
        emailOutsideCommunities: boolean;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    name: string;
    uid: string;
    helpWanted?: string | undefined;
    canOffer?: string | undefined;
    headline?: string | undefined;
    photoStoragePath?: string | undefined;
    emailPreferences?: {
        emailInsideCommunities: boolean;
        emailOutsideCommunities: boolean;
    } | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    name: string;
    uid: string;
    helpWanted?: string | undefined;
    canOffer?: string | undefined;
    headline?: string | undefined;
    photoStoragePath?: string | undefined;
    emailPreferences?: {
        emailInsideCommunities: boolean;
        emailOutsideCommunities: boolean;
    } | undefined;
}>;
export type ProfileValue = z.infer<typeof profileValueSchema>;
export declare const DEFAULT_EMAIL_PREFERENCES: {
    [key in EmailPreferenceKey]: boolean;
};
export {};

import { z } from 'zod';
export declare const CommunitySchema: z.ZodObject<{
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    name: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
    coverPictureStoragePath: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodString>;
    botName: z.ZodOptional<z.ZodString>;
    knowledgeBase: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        summary: string;
    }, {
        title: string;
        summary: string;
    }>, "many">>;
    demoCallInstructions: z.ZodOptional<z.ZodString>;
    twilioAccountSid: z.ZodOptional<z.ZodString>;
    twilioAuthToken: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    name: string;
    phoneNumber?: string | undefined;
    coverPictureStoragePath?: string | undefined;
    context?: string | undefined;
    botName?: string | undefined;
    knowledgeBase?: {
        title: string;
        summary: string;
    }[] | undefined;
    demoCallInstructions?: string | undefined;
    twilioAccountSid?: string | undefined;
    twilioAuthToken?: string | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    name: string;
    phoneNumber?: string | undefined;
    coverPictureStoragePath?: string | undefined;
    context?: string | undefined;
    botName?: string | undefined;
    knowledgeBase?: {
        title: string;
        summary: string;
    }[] | undefined;
    demoCallInstructions?: string | undefined;
    twilioAccountSid?: string | undefined;
    twilioAuthToken?: string | undefined;
}>;
export type Community = z.infer<typeof CommunitySchema>;

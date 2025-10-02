"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunitySchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for Community
exports.CommunitySchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    name: zod_1.z.string(),
    phoneNumber: zod_1.z.string().optional(),
    coverPictureStoragePath: zod_1.z.string().optional(),
    context: zod_1.z.string().optional(),
    botName: zod_1.z.string().optional(),
    knowledgeBase: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        summary: zod_1.z.string(),
    })).optional(),
    demoCallInstructions: zod_1.z.string().optional(),
    // Encrypted Twilio credentials for community-specific WhatsApp sending
    twilioAccountSid: zod_1.z.string().optional(),
    twilioAuthToken: zod_1.z.string().optional(), // Encrypted
});

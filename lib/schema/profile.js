"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_EMAIL_PREFERENCES = exports.profileSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for email preferences
const emailPreferencesSchema = zod_1.z.object({
    emailInsideCommunities: zod_1.z.boolean(),
    emailOutsideCommunities: zod_1.z.boolean(),
});
// Zod schema for Profile
exports.profileSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    uid: zod_1.z.string(),
    helpWanted: zod_1.z.string().optional(),
    canOffer: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    headline: zod_1.z.string().optional(),
    photoStoragePath: zod_1.z.string().optional(),
    emailPreferences: emailPreferencesSchema.optional(),
});
exports.DEFAULT_EMAIL_PREFERENCES = {
    emailInsideCommunities: true,
    emailOutsideCommunities: true,
};

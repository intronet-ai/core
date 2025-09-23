"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_EMAIL_PREFERENCES = exports.userSchema = void 0;
const zod_1 = require("zod");
const linkedin_1 = require("./linkedin");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for email preferences
const emailPreferencesSchema = zod_1.z.object({
    emailInsideCommunities: zod_1.z.boolean(),
    emailOutsideCommunities: zod_1.z.boolean(),
});
// Zod schema for User
exports.userSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    uid: zod_1.z.string(),
    name: zod_1.z.string(),
    photoStoragePath: zod_1.z.string().optional(),
    phoneNumber: zod_1.z.string().optional(),
    emailPreferences: emailPreferencesSchema.optional(),
    linkedinUser: linkedin_1.linkedinUserSchema.optional(),
});
exports.DEFAULT_EMAIL_PREFERENCES = {
    emailInsideCommunities: true,
    emailOutsideCommunities: true,
};

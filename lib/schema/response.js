"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseSchema = void 0;
const zod_1 = require("zod");
const linkedin_1 = require("./linkedin");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for Response
exports.responseSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    finalizedAt: timestamps_1.timestampStubSchema.nullable(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    communityId: zod_1.z.string(),
    uid: zod_1.z.string().nullable(),
    helpWanted: zod_1.z.string(),
    canOffer: zod_1.z.string(),
    linkedinUserUrl: zod_1.z.string().optional(),
    linkedinUser: linkedin_1.linkedinUserSchema.optional(),
});

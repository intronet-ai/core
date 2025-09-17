"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const linkedin_1 = require("./linkedin");
// Zod schema for ResponseValue
exports.responseValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    finalizedAt: common_1.timestampStubSchema.nullable(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    communityId: zod_1.z.string(),
    uid: zod_1.z.string().nullable(),
    helpWanted: zod_1.z.string(),
    canOffer: zod_1.z.string(),
    linkedinProfileUrl: zod_1.z.string().optional(),
    linkedinProfile: linkedin_1.linkedinProfileSchema.optional(),
});

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
    coverPictureStoragePath: zod_1.z.string().optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for Session
exports.sessionSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string(),
    expiresAt: common_1.timestampStubSchema,
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
});

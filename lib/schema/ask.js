"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for Ask
exports.askSchema = zod_1.z.object({
    id: zod_1.z.string(),
    description: zod_1.z.string(),
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    expiredAt: common_1.timestampStubSchema.optional(),
    fulfilledAt: common_1.timestampStubSchema.optional(),
    fulfilledByUid: zod_1.z.string().optional(),
});

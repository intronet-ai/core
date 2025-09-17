"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for Ask
exports.askSchema = zod_1.z.object({
    id: zod_1.z.string(),
    description: zod_1.z.string(),
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    expiredAt: timestamps_1.timestampStubSchema.optional(),
    fulfilledAt: timestamps_1.timestampStubSchema.optional(),
    fulfilledByUid: zod_1.z.string().optional(),
    source: zod_1.z.enum(['whatsapp', 'web']),
    responseId: zod_1.z.string().optional(),
    communityId: zod_1.z.string(),
    communityName: zod_1.z.string().optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for Offer
exports.offerSchema = zod_1.z.object({
    id: zod_1.z.string(),
    description: zod_1.z.string(),
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    expiredAt: timestamps_1.timestampStubSchema.optional(),
});

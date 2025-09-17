"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for Request
exports.requestSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    type: zod_1.z.enum(['ask', 'offer']),
    text: zod_1.z.string(),
    responseId: zod_1.z.string(), // The response identifies the user who made the request.
});

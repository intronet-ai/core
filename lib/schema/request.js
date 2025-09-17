"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for RequestValue
exports.requestValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    type: zod_1.z.enum(['ask', 'offer']),
    text: zod_1.z.string(),
    responseId: zod_1.z.string(), // The response identifies the user who made the request.
});

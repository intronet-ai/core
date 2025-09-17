"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for AskValue
exports.askValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    responseId: zod_1.z.string(),
    communityId: zod_1.z.string(),
    text: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
});

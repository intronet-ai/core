"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailTemplateValueSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for MailTemplate
exports.mailTemplateValueSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    html: zod_1.z.string(),
    subject: zod_1.z.string(),
    requiredDataKeys: zod_1.z.array(zod_1.z.string()),
});

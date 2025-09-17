"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailTemplateValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for MailTemplateValue
exports.mailTemplateValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    html: zod_1.z.string(),
    subject: zod_1.z.string(),
    requiredDataKeys: zod_1.z.array(zod_1.z.string()),
});

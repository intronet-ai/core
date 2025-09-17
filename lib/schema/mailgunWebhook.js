"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailgunWebhookValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for signature object
const signatureSchema = zod_1.z.object({
    signature: zod_1.z.string(),
    timestamp: zod_1.z.string(),
    token: zod_1.z.string(),
});
// For now, we'll use z.any() for MailgunEvent since it's a complex external type
// In the future, this could be converted to a proper zod schema
const mailgunEventSchema = zod_1.z.any();
// Zod schema for MailgunWebhookValue
exports.mailgunWebhookValueSchema = zod_1.z.object({
    'event-data': mailgunEventSchema,
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    signature: signatureSchema,
});

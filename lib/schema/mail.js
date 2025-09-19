"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailValueSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// For now, we'll use z.any() for MailgunEvent since it's a complex external type
const mailgunEventSchema = zod_1.z.any();
// Zod schema for delivery info object
const deliveryInfoSchema = zod_1.z.object({
    rejected: zod_1.z.array(zod_1.z.unknown()),
    response: zod_1.z.string(),
    pending: zod_1.z.array(zod_1.z.unknown()),
    messageId: zod_1.z.string(),
    accepted: zod_1.z.array(zod_1.z.string()),
});
// Zod schema for delivery object
const deliverySchema = zod_1.z.object({
    startTime: timestamps_1.timestampStubSchema,
    error: zod_1.z.null(),
    leaseExpireTime: zod_1.z.null(),
    state: zod_1.z.string(),
    endTime: timestamps_1.timestampStubSchema,
    info: deliveryInfoSchema,
    attempts: zod_1.z.number(),
});
// Zod schema for template object (generic)
const templateSchema = (dataSchema) => zod_1.z.object({
    data: dataSchema,
    name: zod_1.z.string(),
});
// Zod schema for MailValue (generic)
const mailValueSchema = (dataSchema) => zod_1.z.object({
    // These properties are provided by the firebase mail extension...
    template: templateSchema(dataSchema),
    to: zod_1.z.string(),
    delivery: deliverySchema,
    // ... while these are provided by the mailgun event webhook (we manually add them to mail docs)
    html: zod_1.z.string().optional(),
    subject: zod_1.z.string().optional(),
    events: zod_1.z.array(mailgunEventSchema).optional(),
    eventsSummary: zod_1.z.record(zod_1.z.string(), timestamps_1.timestampStubSchema).optional(),
});
exports.mailValueSchema = mailValueSchema;
// Concrete schema that avoids circular reference issues
const mailDocumentSchema = zod_1.z.object({
    template: zod_1.z.object({
        data: zod_1.z.unknown().optional(),
        name: zod_1.z.string(),
    }),
    to: zod_1.z.string(),
    delivery: deliverySchema,
    html: zod_1.z.string().optional(),
    subject: zod_1.z.string().optional(),
    events: zod_1.z.array(mailgunEventSchema).optional(),
    eventsSummary: zod_1.z.record(zod_1.z.string(), timestamps_1.timestampStubSchema).optional(),
});

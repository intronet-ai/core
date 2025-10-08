"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.announcementRecipientSchema = exports.announcementSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for Announcement
exports.announcementSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    communityId: zod_1.z.string(),
    createdBy: zod_1.z.string(),
    message: zod_1.z.string(),
    status: zod_1.z.enum(['draft', 'queued', 'sending', 'completed', 'failed']).default('draft'),
    // User targeting
    targetUserIds: zod_1.z.array(zod_1.z.string()).optional(),
    excludeUserIds: zod_1.z.array(zod_1.z.string()).optional(),
    // Sending progress
    totalRecipients: zod_1.z.number().default(0),
    sentCount: zod_1.z.number().default(0),
    failedCount: zod_1.z.number().default(0),
    // Timestamps
    scheduledAt: timestamps_1.timestampStubSchema.optional(),
    startedSendingAt: timestamps_1.timestampStubSchema.optional(),
    completedAt: timestamps_1.timestampStubSchema.optional(),
    // Error tracking
    errorMessage: zod_1.z.string().optional(),
});
// Status for individual recipient
exports.announcementRecipientSchema = zod_1.z.object({
    createdAt: timestamps_1.timestampStubSchema,
    updatedAt: timestamps_1.timestampStubSchema,
    announcementId: zod_1.z.string(),
    userId: zod_1.z.string(),
    userName: zod_1.z.string().optional(),
    userPhoneNumber: zod_1.z.string().optional(),
    interpolatedMessage: zod_1.z.string(),
    status: zod_1.z.enum(['pending', 'sent', 'failed']).default('pending'),
    sentAt: timestamps_1.timestampStubSchema.optional(),
    errorMessage: zod_1.z.string().optional(),
    sessionId: zod_1.z.string().optional(),
    messageId: zod_1.z.string().optional(), // Message doc ID in session
});

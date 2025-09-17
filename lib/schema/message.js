"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSystemMessage = exports.isToolMessage = exports.isAssistantMessage = exports.isUserMessage = exports.messageSchema = exports.systemMessageSchema = exports.toolMessageSchema = exports.assistantMessageSchema = exports.userMessageSchema = exports.toolCallSchema = exports.roleSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
// Zod schema for message roles
exports.roleSchema = zod_1.z.enum(['user', 'assistant', 'tool', 'system']);
// Zod schema for tool calls
exports.toolCallSchema = zod_1.z.object({
    name: zod_1.z.string(),
    role: exports.roleSchema,
    args: zod_1.z.unknown().optional(),
    result: zod_1.z.unknown().optional(),
    status: zod_1.z.enum(['started', 'success', 'error']).optional(),
    errorMessage: zod_1.z.string().optional(),
    startedAt: timestamps_1.timestampStubSchema.optional(),
    completedAt: timestamps_1.timestampStubSchema.optional(),
});
// Base message schema with common fields
const baseMessageSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    createdAt: timestamps_1.timestampStubSchema.optional(),
    updatedAt: timestamps_1.timestampStubSchema.optional(),
});
// User message schema
exports.userMessageSchema = baseMessageSchema.extend({
    role: zod_1.z.literal('user'),
    message: zod_1.z.string(),
    senderId: zod_1.z.string(),
    senderName: zod_1.z.string(),
    senderAvatarUrl: zod_1.z.string().url().optional(),
});
// Assistant message schema
exports.assistantMessageSchema = baseMessageSchema.extend({
    role: zod_1.z.literal('assistant'),
    message: zod_1.z.string(),
    toolCall: exports.toolCallSchema.optional(),
});
// Tool message schema
exports.toolMessageSchema = baseMessageSchema.extend({
    role: zod_1.z.literal('tool'),
    message: zod_1.z.string(),
    toolCall: exports.toolCallSchema,
});
// System message schema
exports.systemMessageSchema = baseMessageSchema.extend({
    role: zod_1.z.literal('system'),
    message: zod_1.z.string(),
});
// Union schema for all message roles
exports.messageSchema = zod_1.z.discriminatedUnion('role', [
    exports.userMessageSchema,
    exports.assistantMessageSchema,
    exports.toolMessageSchema,
    exports.systemMessageSchema,
]);
// Type guards for message discrimination
const isUserMessage = (message) => message.role === 'user';
exports.isUserMessage = isUserMessage;
const isAssistantMessage = (message) => message.role === 'assistant';
exports.isAssistantMessage = isAssistantMessage;
const isToolMessage = (message) => message.role === 'tool';
exports.isToolMessage = isToolMessage;
const isSystemMessage = (message) => message.role === 'system';
exports.isSystemMessage = isSystemMessage;

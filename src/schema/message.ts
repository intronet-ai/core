import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for message roles
export const roleSchema = z.enum(['user', 'assistant', 'tool', 'system']);

// Zod schema for tool calls
export const toolCallSchema = z.object({
  name: z.string(),
  role: roleSchema,
  args: z.unknown().optional(),
  result: z.unknown().optional(),
  status: z.enum(['started', 'success', 'error']).optional(),
  errorMessage: z.string().optional(),
  startedAt: timestampStubSchema.optional(),
  completedAt: timestampStubSchema.optional(),
});

// Base message schema with common fields
const baseMessageSchema = z.object({
  id: z.string().optional(),
  createdAt: timestampStubSchema.optional(),
  updatedAt: timestampStubSchema.optional(),
});

// User message schema
export const userMessageSchema = baseMessageSchema.extend({
  role: z.literal('user'),
  message: z.string(),
  senderId: z.string(),
  senderName: z.string(),
  senderAvatarUrl: z.string().url().optional(),
});

// Assistant message schema
export const assistantMessageSchema = baseMessageSchema.extend({
  role: z.literal('assistant'),
  message: z.string(),
  toolCall: toolCallSchema.optional(),
});

// Tool message schema
export const toolMessageSchema = baseMessageSchema.extend({
  role: z.literal('tool'),
  message: z.string(),
  toolCall: toolCallSchema,
});

// System message schema
export const systemMessageSchema = baseMessageSchema.extend({
  role: z.literal('system'),
  message: z.string(),
});

// Union schema for all message roles
export const messageSchema = z.discriminatedUnion('role', [
  userMessageSchema,
  assistantMessageSchema,
  toolMessageSchema,
  systemMessageSchema,
]);

// TypeScript type definitions
export type Role = z.infer<typeof roleSchema>;
export type ToolCall = z.infer<typeof toolCallSchema>;
export type UserMessage = z.infer<typeof userMessageSchema>;
export type AssistantMessage = z.infer<typeof assistantMessageSchema>;
export type ToolMessage = z.infer<typeof toolMessageSchema>;
export type SystemMessage = z.infer<typeof systemMessageSchema>;

// Union type for all messages
export type Message =
  | UserMessage
  | AssistantMessage
  | ToolMessage
  | SystemMessage;

// Type guards for message discrimination
export const isUserMessage = (message: Message): message is UserMessage =>
  message.role === 'user';
export const isAssistantMessage = (
  message: Message
): message is AssistantMessage => message.role === 'assistant';
export const isToolMessage = (message: Message): message is ToolMessage =>
  message.role === 'tool';
export const isSystemMessage = (message: Message): message is SystemMessage =>
  message.role === 'system';

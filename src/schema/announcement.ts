import { z } from 'zod';
import { timestampStubSchema } from './utils/timestamps';

// Zod schema for Announcement
export const announcementSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  communityId: z.string(),
  createdBy: z.string(), // Admin user ID who created the announcement
  message: z.string(), // Message template with interpolation support (e.g., "Hi {name}!")
  status: z.enum(['draft', 'queued', 'sending', 'completed', 'failed']).default('draft'),
  
  // User targeting
  targetUserIds: z.array(z.string()).optional(), // Specific users to send to (empty = all community users)
  excludeUserIds: z.array(z.string()).optional(), // Users to exclude from sending
  
  // Sending progress
  totalRecipients: z.number().default(0),
  sentCount: z.number().default(0),
  failedCount: z.number().default(0),
  
  // Timestamps
  scheduledAt: timestampStubSchema.optional(), // When to send (if scheduled for future)
  startedSendingAt: timestampStubSchema.optional(),
  completedAt: timestampStubSchema.optional(),
  
  // Error tracking
  errorMessage: z.string().optional(),
});

// TypeScript type inferred from zod schema
export type Announcement = z.infer<typeof announcementSchema>;

// Status for individual recipient
export const announcementRecipientSchema = z.object({
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
  announcementId: z.string(),
  userId: z.string(),
  userName: z.string().optional(),
  userPhoneNumber: z.string().optional(),
  interpolatedMessage: z.string(), // Message with {name} etc. replaced
  status: z.enum(['pending', 'sent', 'failed']).default('pending'),
  sentAt: timestampStubSchema.optional(),
  errorMessage: z.string().optional(),
  sessionId: z.string().optional(), // Session used for sending
  messageId: z.string().optional(), // Message doc ID in session
});

export type AnnouncementRecipient = z.infer<typeof announcementRecipientSchema>;

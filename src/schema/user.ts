import { z } from 'zod';
import { timestampStubSchema } from './common';

// Zod schema for Ask
const askSchema = z.object({
  id: z.string(),
  description: z.string(),
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
});

// Zod schema for Offer
const offerSchema = z.object({
  id: z.string(),
  description: z.string(),
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
});

// Zod schema for Location
const locationSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  city: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  name: z.string(),
  placeId: z.string().optional(),
  notes: z.string().optional(),
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
});

// Zod schema for User
export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  linkedInProfileUrl: z.string().url("Must be a valid LinkedIn profile URL"),
  phoneNumber: z.string().optional(),
  asks: z.array(askSchema).optional(),
  offers: z.array(offerSchema).optional(),
  location: locationSchema.optional(),
  createdAt: timestampStubSchema,
  updatedAt: timestampStubSchema,
});

// TypeScript types inferred from zod schemas
export type User = z.infer<typeof userSchema>;
export type Ask = z.infer<typeof askSchema>;
export type Offer = z.infer<typeof offerSchema>;
export type Location = z.infer<typeof locationSchema>;

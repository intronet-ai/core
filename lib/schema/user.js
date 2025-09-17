"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for Ask
const askSchema = zod_1.z.object({
    id: zod_1.z.string(),
    description: zod_1.z.string(),
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
});
// Zod schema for Offer
const offerSchema = zod_1.z.object({
    id: zod_1.z.string(),
    description: zod_1.z.string(),
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
});
// Zod schema for Location
const locationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    displayName: zod_1.z.string(),
    city: zod_1.z.string(),
    latitude: zod_1.z.number(),
    longitude: zod_1.z.number(),
    name: zod_1.z.string(),
    placeId: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
});
// Zod schema for User
exports.userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().min(1, "Name is required"),
    linkedInProfileUrl: zod_1.z.string().url("Must be a valid LinkedIn profile URL"),
    phoneNumber: zod_1.z.string().optional(),
    asks: zod_1.z.array(askSchema).optional(),
    offers: zod_1.z.array(offerSchema).optional(),
    location: locationSchema.optional(),
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
});

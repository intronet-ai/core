import { z } from 'zod';
declare const askSchema: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    description: string;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    description: string;
}>;
declare const offerSchema: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    description: string;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    description: string;
}>;
declare const locationSchema: z.ZodObject<{
    id: z.ZodString;
    displayName: z.ZodString;
    city: z.ZodString;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    name: z.ZodString;
    placeId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    name: string;
    displayName: string;
    city: string;
    latitude: number;
    longitude: number;
    placeId?: string | undefined;
    notes?: string | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    name: string;
    displayName: string;
    city: string;
    latitude: number;
    longitude: number;
    placeId?: string | undefined;
    notes?: string | undefined;
}>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    linkedInProfileUrl: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
    asks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }, {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }>, "many">>;
    offers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }, {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }>, "many">>;
    location: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        displayName: z.ZodString;
        city: z.ZodString;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
        name: z.ZodString;
        placeId: z.ZodOptional<z.ZodString>;
        notes: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        name: string;
        displayName: string;
        city: string;
        latitude: number;
        longitude: number;
        placeId?: string | undefined;
        notes?: string | undefined;
    }, {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        name: string;
        displayName: string;
        city: string;
        latitude: number;
        longitude: number;
        placeId?: string | undefined;
        notes?: string | undefined;
    }>>;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    name: string;
    linkedInProfileUrl: string;
    phoneNumber?: string | undefined;
    asks?: {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }[] | undefined;
    offers?: {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }[] | undefined;
    location?: {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        name: string;
        displayName: string;
        city: string;
        latitude: number;
        longitude: number;
        placeId?: string | undefined;
        notes?: string | undefined;
    } | undefined;
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    id: string;
    name: string;
    linkedInProfileUrl: string;
    phoneNumber?: string | undefined;
    asks?: {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }[] | undefined;
    offers?: {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        description: string;
    }[] | undefined;
    location?: {
        createdAt: import("../utils/TimestampStub").TimestampStub;
        updatedAt: import("../utils/TimestampStub").TimestampStub;
        id: string;
        name: string;
        displayName: string;
        city: string;
        latitude: number;
        longitude: number;
        placeId?: string | undefined;
        notes?: string | undefined;
    } | undefined;
}>;
export type User = z.infer<typeof userSchema>;
export type Ask = z.infer<typeof askSchema>;
export type Offer = z.infer<typeof offerSchema>;
export type Location = z.infer<typeof locationSchema>;
export {};

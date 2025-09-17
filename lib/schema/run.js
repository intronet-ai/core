"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runValueSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
// Zod schema for Model type
const modelSchema = zod_1.z.literal('original'); // | z.literal('differentiated-asks') when needed
// Zod schema for RunValue
exports.runValueSchema = zod_1.z.object({
    createdAt: common_1.timestampStubSchema,
    updatedAt: common_1.timestampStubSchema,
    assessmentRequestCount: zod_1.z.number(),
    assessmentCount: zod_1.z.number(),
    model: modelSchema,
    responseCount: zod_1.z.number(),
    communityId: zod_1.z.string(),
    batchSize: zod_1.z.number(),
    apiRequestsCompletedAt: common_1.timestampStubSchema.nullable(),
    introductionsCompletedAt: common_1.timestampStubSchema.nullable(),
    approvedAt: common_1.timestampStubSchema.nullable(),
    estimatedApiCostCents: zod_1.z.number().optional(),
    actualApiCostCents: zod_1.z.number().optional(),
    // type: z.enum(['extracting_requests', 'matching']).optional(), // when needed
});

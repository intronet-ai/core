"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membershipSchema = void 0;
const zod_1 = require("zod");
const timestamps_1 = require("./utils/timestamps");
exports.membershipSchema = zod_1.z.object({
    invitationCode: zod_1.z.string(),
    isCoordinator: zod_1.z.boolean(),
    uid: zod_1.z.string(),
    communityId: zod_1.z.string(),
    createdAt: timestamps_1.timestampStubSchema.optional(),
    updatedAt: timestamps_1.timestampStubSchema.optional(),
    acceptedAt: timestamps_1.timestampStubSchema.optional(),
    revokedAt: timestamps_1.timestampStubSchema.optional(),
});

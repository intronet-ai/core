"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampStubSchema = void 0;
const zod_1 = require("zod");
const TimestampStub_1 = require("../utils/TimestampStub");
// Shared zod schema for TimestampStub
exports.timestampStubSchema = zod_1.z.instanceof(TimestampStub_1.TimestampStub);

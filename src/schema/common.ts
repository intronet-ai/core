import { z } from 'zod';
import { TimestampStub } from '../utils/TimestampStub';

// Shared zod schema for TimestampStub
export const timestampStubSchema = z.instanceof(TimestampStub);

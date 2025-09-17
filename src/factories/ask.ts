import * as Factory from 'factory.ts';
import { Ask } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeAskFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<Ask>({
    id: 'ask-123',
    description: "I'm looking for help with my latin-speaking kindergarten",
    communityId: 'abc123',
    source: 'web',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  });

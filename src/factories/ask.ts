import * as Factory from 'factory.ts';
import { AskValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeAskFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<AskValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    text: "I'm looking for help with my latin-speaking kindergarten",
    communityId: 'abc-123',
    responseId: 'def-456',
    tags: [],
  });

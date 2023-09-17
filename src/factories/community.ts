import * as Factory from 'factory.ts';
import { CommunityValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeCommunityFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<CommunityValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: Factory.each(i => `Example community ${i}`),
  });

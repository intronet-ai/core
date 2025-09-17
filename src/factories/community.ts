import * as Factory from 'factory.ts';
import { Community } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeCommunityFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<Community>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: Factory.each(i => `Example community ${i}`),
  });

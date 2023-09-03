import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema/profile';
import { TimestampStub } from '../utils/TimestampStub';

export const makeProfileFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<ProfileValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    ask: 'Want to learn how to cook pancakes',
    offer: 'Can teach you how to speak Pig Latin',
  });

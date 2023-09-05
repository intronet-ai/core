import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { ProfileValue } from '../schema/profile';
import { TimestampStub } from '../utils/TimestampStub';

export const makeProfileFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<ProfileValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    uid: faker.random.alphaNumeric(10),
    name: faker.name.fullName(),
  });

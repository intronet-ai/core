import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { Profile } from '../schema/profile';
import { TimestampStub } from '../utils/TimestampStub';

export const makeProfileFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<Profile>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    uid: faker.random.alphaNumeric(10),
    name: faker.name.fullName(),
  });

import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { User } from '../schema/user';
import { TimestampStub } from '../utils/TimestampStub';

export const makeUserFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<User>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    communityId: 'abc123',
    uid: faker.random.alphaNumeric(10),
    name: faker.name.fullName(),
  });

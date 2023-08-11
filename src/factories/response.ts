import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { ResponseValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeResponseFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<ResponseValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    uid: faker.random.alphaNumeric(28),
    communityId: faker.random.alphaNumeric(28),
  });

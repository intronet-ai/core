import * as Factory from 'factory.ts';
import { RunValue } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeRunFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<RunValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    assessmentRequestCount: 0,
    responseCount: 0,
    assessmentCount: 0,
    apiRequestsCompletedAt: null,
    introductionsCompletedAt: null,
    communityId: '1',
    approvedAt: null,
    batchSize: 5,
  });

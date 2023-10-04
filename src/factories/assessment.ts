import { faker } from '@faker-js/faker';
import * as Factory from 'factory.ts';
import { AssessmentValue } from '../schema/assessment';
import { TimestampStub } from '../utils/TimestampStub';

export const makeAssessmentFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<AssessmentValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    assessmentRequestId: Factory.each(i => String(i)),
    providerResponseId: Factory.each(i => String(i)),
    seekerResponseId: Factory.each(i => String(i)),
    providerName: faker.name.firstName(),
    communityId: Factory.each(i => String(i)),
    seekerAskId: Factory.each(i => String(i)),
    runId: Factory.each(i => String(i)),
    score: 0.5,
    explanation:
      'Person A may be able to help Person B because they are really smart',
  });

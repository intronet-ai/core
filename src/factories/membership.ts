import * as Factory from 'factory.ts';
import { Membership } from '../schema/membership';
import { TimestampStub } from '../utils/TimestampStub';

export const makeMembershipFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<Membership>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    uid: Factory.each(i => String(i)),
    communityId: Factory.each(i => String(i)),
    isCoordinator: false,
    invitationCode: 'abc123',
  });

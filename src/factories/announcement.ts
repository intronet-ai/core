import * as Factory from 'factory.ts';
import { Announcement, AnnouncementRecipient } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeAnnouncementFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<Announcement>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    communityId: Factory.each(i => `community-${i}`),
    createdBy: 'admin-user',
    message: Factory.each(i => `Announcement message ${i} with {name} interpolation`),
    status: 'draft',
    totalRecipients: 0,
    sentCount: 0,
    failedCount: 0,
  });

export const makeAnnouncementRecipientFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<AnnouncementRecipient>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    announcementId: 'announcement-id',
    userId: Factory.each(i => `user-${i}`),
    userName: Factory.each(i => `User ${i}`),
    userPhoneNumber: '+17202912089',
    interpolatedMessage: Factory.each(i => `Announcement message ${i} with User ${i} interpolation`),
    status: 'pending',
  });

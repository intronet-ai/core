import * as Factory from 'factory.ts';
import { MailValue } from '../schema/mail';
import { TimestampStub } from '../utils/TimestampStub';

export const makeMailFactory = (TimestampKlass: typeof TimestampStub) =>
  Factory.makeFactory<MailValue<any>>({
    template: {
      data: {
        seekerName: 'Jay',
        communityName: 'Hitchhiker',
        text: "Hey friend, let's connect?",
        title: 'Jay would like to connect',
      },
      name: 'introRequest',
    },
    to: 'michael@intronet.ai',
    delivery: {
      startTime: TimestampKlass.now(),
      error: null,
      leaseExpireTime: null,
      state: 'SUCCESS',
      endTime: TimestampKlass.now(),
      info: {
        rejected: [],
        response: '250 Great success',
        pending: [],
        messageId: '<5fdcf3ad-9ebc-6836-5840-77e4c25e25a6@intronet.ai>',
        accepted: ['michael@intronet.ai'],
      },
      attempts: 1,
    },
  });

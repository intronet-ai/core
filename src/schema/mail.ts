import { MailgunEvent } from '../factories/exampleData/mailgunWebhook';
import { TimestampStub } from '../utils/TimestampStub';

export interface MailValue<T> {
  // These properties are provided by the firebase mail extension...
  template: {
    data: T;
    name: string;
  };
  to: string;
  delivery: {
    startTime: TimestampStub;
    error: null;
    leaseExpireTime: null;
    state: string;
    endTime: TimestampStub;
    info: {
      rejected: [];
      response: string;
      pending: [];
      messageId: string;
      accepted: string[];
    };
    attempts: number;
  };
  // ... while these are provided by the mailgun event webhook (we manually add them to mail docs)
  events: Array<MailgunEvent>;
}

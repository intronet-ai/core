import { MailgunEvent } from '../factories/exampleData/mailgunWebhook';
import { TimestampStub } from '../utils/TimestampStub';

export interface MailgunWebhookValue {
  'event-data': MailgunEvent;
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  signature: {
    signature: string;
    timestamp: string;
    token: string;
  };
}

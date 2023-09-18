import { MailgunEvent } from '../factories/exampleData/mailgunWebhook';
import { TimestampStub } from '../utils/TimestampStub';
export interface MailValue<T> {
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
    html?: string;
    subject?: string;
    events?: Array<MailgunEvent>;
    eventsSummary?: Record<MailgunEvent['event'], TimestampStub>;
}

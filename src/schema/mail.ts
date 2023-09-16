import { TimestampStub } from '../utils/TimestampStub';

export interface MailValue {
  template: {
    data: unknown;
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
}

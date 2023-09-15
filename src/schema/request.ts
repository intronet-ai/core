import { TimestampStub } from '../utils/TimestampStub';

// A request is either an ask or an offer.
export interface RequestValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  type: 'ask' | 'offer';
  text: string;
  responseId: string; // The response identifies the user who made the request.
}

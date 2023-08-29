import { TimestampStub } from '../utils/TimestampStub';

export interface AssessmentValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  assessmentRequestId: string;
  seekerResponseId: string;
  providerResponseId: string;
  providerName?: string;
  runId: string;
  score: number;
  explanation: string;
  isSelected?: boolean;
}

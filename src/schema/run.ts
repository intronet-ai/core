import { TimestampStub } from '../utils/TimestampStub';

export interface RunValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  assessmentRequestCount: number;
  assessmentCount: number;
  responseCount: number;
  communityId: string;
  batchSize: number;
  apiRequestsCompletedAt: TimestampStub | null;
  introductionsCompletedAt: TimestampStub | null;
  approvedAt: TimestampStub | null;
  estimatedApiCostCents?: number;
  actualApiCostCents?: number;
}

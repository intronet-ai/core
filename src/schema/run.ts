import { TimestampStub } from '../utils/TimestampStub';

export type Model = 'original'; // | 'differentiated-asks';

export interface RunValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  assessmentRequestCount: number;
  assessmentCount: number;
  model: Model;
  responseCount: number;
  communityId: string;
  batchSize: number;
  apiRequestsCompletedAt: TimestampStub | null;
  introductionsCompletedAt: TimestampStub | null;
  approvedAt: TimestampStub | null;
  estimatedApiCostCents?: number;
  actualApiCostCents?: number;
  // type: 'extracting_requests' | 'matching';
}

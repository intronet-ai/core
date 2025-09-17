import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeRunFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    communityId: string;
    model: "original";
    assessmentRequestCount: number;
    assessmentCount: number;
    responseCount: number;
    batchSize: number;
    apiRequestsCompletedAt: TimestampStub | null;
    introductionsCompletedAt: TimestampStub | null;
    approvedAt: TimestampStub | null;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}, ("createdAt" | "updatedAt" | "communityId" | "model" | "assessmentRequestCount" | "assessmentCount" | "responseCount" | "batchSize" | "apiRequestsCompletedAt" | "introductionsCompletedAt" | "approvedAt") | ("actualApiCostCents" | "estimatedApiCostCents")>;

import * as Factory from 'factory.ts';
import { OriginalAssessmentRequest } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAssessmentRequestFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<OriginalAssessmentRequest, "createdAt" | "updatedAt" | "seekerResponseId" | "runId" | "providerResponseIds" | "type" | "prompt" | "communityId" | "systemMessage" | "sentAt" | "rawResponse" | "responseReceivedAt" | "approved" | "error" | "actualApiCostCents" | "estimatedApiCostCents">;

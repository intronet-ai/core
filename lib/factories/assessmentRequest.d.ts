import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAssessmentRequestFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    communityId: string;
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    prompt: string;
    providerResponseIds: string[];
    systemMessage: string;
    sentAt: TimestampStub | null;
    responseReceivedAt: TimestampStub | null;
    error: string | null;
    response?: {
        response: string;
        costCents: number;
        model: string;
    } | undefined;
    approved?: true | undefined;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}, ("createdAt" | "updatedAt" | "communityId" | "seekerResponseId" | "seekerAskId" | "runId" | "prompt" | "providerResponseIds" | "systemMessage" | "sentAt" | "responseReceivedAt" | "error") | ("response" | "approved" | "actualApiCostCents" | "estimatedApiCostCents")>;

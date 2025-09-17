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
    rawResponse?: {
        object: "chat.completion";
        model: "gpt-4-0613";
        created: number;
        usage: {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        };
        id: string;
        choices: [{
            message: {
                content: string;
            };
            finish_reason: "stop";
            index: 0;
        }];
    } | undefined;
    approved?: true | undefined;
    actualApiCostCents?: number | undefined;
    estimatedApiCostCents?: number | undefined;
}, ("createdAt" | "updatedAt" | "communityId" | "seekerResponseId" | "seekerAskId" | "runId" | "prompt" | "providerResponseIds" | "systemMessage" | "sentAt" | "responseReceivedAt" | "error") | ("response" | "rawResponse" | "approved" | "actualApiCostCents" | "estimatedApiCostCents")>;

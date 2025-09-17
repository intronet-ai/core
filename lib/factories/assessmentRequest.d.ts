import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAssessmentRequestFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    communityId: string;
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
        id: string;
        model: "gpt-4-0613";
        created: number;
        usage: {
            completion_tokens: number;
            prompt_tokens: number;
            total_tokens: number;
        };
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
}, ("createdAt" | "updatedAt" | "seekerResponseId" | "seekerAskId" | "runId" | "communityId" | "prompt" | "providerResponseIds" | "systemMessage" | "sentAt" | "responseReceivedAt" | "error") | ("response" | "rawResponse" | "approved" | "actualApiCostCents" | "estimatedApiCostCents")>;

import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeAssessmentRequestFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    communityId: string;
    sentAt: TimestampStub | null;
    seekerResponseId: string;
    seekerAskId: string;
    runId: string;
    prompt: string;
    providerResponseIds: string[];
    systemMessage: string;
    responseReceivedAt: TimestampStub | null;
    error: string | null;
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
}, ("createdAt" | "updatedAt" | "communityId" | "sentAt" | "seekerResponseId" | "seekerAskId" | "runId" | "prompt" | "providerResponseIds" | "systemMessage" | "responseReceivedAt" | "error") | ("rawResponse" | "approved" | "actualApiCostCents" | "estimatedApiCostCents")>;

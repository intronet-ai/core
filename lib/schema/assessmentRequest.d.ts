import { TimestampStub } from '../utils/TimestampStub';
import { Model } from './run';
export type AssessmentRequestValueBase<T extends Model, F> = F & {
    type: T;
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    prompt: string;
    runId: string;
    communityId: string;
    systemMessage: string;
    sentAt: null | TimestampStub;
    rawResponse?: ChatGPTCompletionResult;
    responseReceivedAt: null | TimestampStub;
    approved?: true;
    error: null | string;
    actualApiCostCents?: number;
    estimatedApiCostCents?: number;
};
export type OriginalAssessmentRequest = AssessmentRequestValueBase<'original', {
    seekerResponseId: string;
    providerResponseIds: Array<string>;
}>;
export type AssessmentRequestValue = OriginalAssessmentRequest;
export interface ChatGPTCompletionResult {
    created: number;
    usage: {
        completion_tokens: number;
        prompt_tokens: number;
        total_tokens: number;
    };
    model: 'gpt-4-0613';
    id: string;
    choices: [{
        finish_reason: 'stop';
        index: 0;
        message: {
            content: string;
        };
    }];
    object: 'chat.completion';
}

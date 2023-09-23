import { TimestampStub } from '../utils/TimestampStub';

export interface AssessmentRequestValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  prompt: string;
  runId: string;
  communityId: string;
  seekerResponseId: string;
  seekerAskId: string;
  providerResponseIds: Array<string>;
  systemMessage: string;
  sentAt: null | TimestampStub;

  // Deprecated
  rawResponse?: ChatGPTCompletionResult;
  // Replaced with:
  response?: LLMCompletionResult;

  responseReceivedAt: null | TimestampStub;
  approved?: true;
  error: null | string;
  actualApiCostCents?: number;
  estimatedApiCostCents?: number;
}

export interface LLMCompletionResult {
  response: string;
  costCents: number;
  model: string;
}

export interface ChatGPTCompletionResult {
  created: number;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
  model: 'gpt-4-0613';
  id: string;
  choices: [{ finish_reason: 'stop'; index: 0; message: { content: string } }];
  object: 'chat.completion';
}

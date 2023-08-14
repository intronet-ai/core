import { TimestampStub } from '../utils/TimestampStub';

export interface AssessmentRequestValue {
  createdAt: TimestampStub;
  updatedAt: TimestampStub;
  prompt: string;
  runId: string;
  communityId: string;
  seekerResponseId: string;
  providerResponseIds: Array<string>;
  systemMessage: string;
  sentAt: null | TimestampStub;
  // Currently this is typed to chatGPT's API schema
  rawResponse?: ChatGPTCompletionResult;
  responseReceivedAt: null | TimestampStub;
  error: null | string;
  apiCostCents?: number;
}

interface ChatGPTCompletionResult {
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

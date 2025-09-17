import { z } from 'zod';

// Zod schema for LLMCompletionResult
export const llmCompletionResultSchema = z.object({
  response: z.string(),
  costCents: z.number(),
  model: z.string(),
});

// Zod schema for ChatGPTCompletionResult
export const chatGptCompletionResultSchema = z.object({
  created: z.number(),
  usage: z.object({
    completion_tokens: z.number(),
    prompt_tokens: z.number(),
    total_tokens: z.number(),
  }),
  model: z.literal('gpt-4-0613'),
  id: z.string(),
  choices: z.tuple([
    z.object({
      finish_reason: z.literal('stop'),
      index: z.literal(0),
      message: z.object({ content: z.string() }),
    }),
  ]),
  object: z.literal('chat.completion'),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemMessage = void 0;
exports.systemMessage = `Assess provider's potential to assist seeker and give a score and explanation.

For the score:
* Score from 0 to 1, where 1 means provider can definitely help, and 0 means they can't:
1 = certain the provider can assist
0 = certain the provider can't assist
For the explanation
* Only give reasons why reasons why provider may be able help, not why they can't
* Only provide positive reasons why provider may be able to help, not reasons why they can't
* Always qualify your response with "might", "could" or similar
* Please refer to the provider by name (don't use the word "provider").

Your response should follow this exact JSON format:

{ score: 1, explanation: "Michael can help because ..." }

OR

{ score: 0.2, explanation: "Jennifer might be able to assist because ..." }

Michael and Jennifer are examples of provider names that may be given. Please use the actual provider name in your response.

Only respond with this JSON format, with no additional text. The prompt will include details for provider and seeker.
`;

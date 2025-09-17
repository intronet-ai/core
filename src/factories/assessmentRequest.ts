import * as Factory from 'factory.ts';
import { AssessmentRequest } from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeAssessmentRequestFactory = (
  TimestampKlass: typeof TimestampStub
) =>
  Factory.makeFactory<AssessmentRequest>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    seekerResponseId: 'abc-123',
    seekerAskId: 'def-456',
    providerResponseIds: ['def456', 'ghi789'],
    sentAt: null,
    responseReceivedAt: null,
    error: null,
    communityId: 'abc-123',
    runId: 'def-456',
    prompt: JSON.stringify({
      seeker: {
        id: 'abc-123',
        lookingFor: 'Help establishing a latin-speaking kindergarten',
        workingOn: "Children's education",
      },
      providers: [
        {
          id: 'def456',
          canOffer: 'Help with personal assisstants',
          workingOn: 'Chinese hot water bottle exports',
        },
        {
          id: 'ghi789',
          canOffer: 'Mongolian history lessons',
          workingOn: 'Learning arabic',
        },
      ],
    }),
    systemMessage: `Assess community members' potential to assist each other.
    You'll get details of a "seeker" needing help, and "providers" who might assist. Evaluate each provider's potential to help the seeker, giving a numerical score and explanation.
    Score from 0 to 1, where 1 means the provider can definitely help, and 0 means they can't.
    1 = certain the provider can assist
    0 = certain the provider can't assist
    Your response should follow this exact JSON format:
    {
    "PROVIDER-1-ID": { score: 1, explanation: "PROVIDER-1-NAME can help SEEKER-NAME because ..." },
    "PROVIDER-2-ID": { score: 0.2, explanation: "PROVIDER-2-NAME might assist SEEKER-NAME because ..." },
    ...`,
  });

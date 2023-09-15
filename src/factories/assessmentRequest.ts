import * as Factory from 'factory.ts';
import {
  // DifferentiatedAsksAssessmentRequest,
  OriginalAssessmentRequest,
} from '../schema';
import { TimestampStub } from '../utils/TimestampStub';

export const makeOriginalAssessmentRequestFactory = (
  TimestampKlass: typeof TimestampStub
) =>
  Factory.makeFactory<OriginalAssessmentRequest>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    seekerResponseId: 'abc-123',
    providerResponseIds: ['def456', 'ghi789'],
    sentAt: null,
    responseReceivedAt: null,
    error: null,
    communityId: 'abc-123',
    runId: 'def-456',
    type: 'original',
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

// export const makeDifferentiatedAsksAssessmentRequestFactory = (
//   TimestampKlass: typeof TimestampStub
// ) =>
//   Factory.makeFactory<DifferentiatedAsksAssessmentRequest>({
//     createdAt: TimestampKlass.now(),
//     updatedAt: TimestampKlass.now(),
//     sentAt: null,
//     responseReceivedAt: null,
//     error: null,
//     communityId: 'abc-123',
//     runId: 'def-456',
//     type: 'differentiated-asks',
//     prompt: 'Help with dancing; learning to juggle; finding a job in Singapore',
//     systemMessage: `You'll be given free-form text from a user indicating what they are asking for help with. The user may be asking for one or multiple things. Please identify the separate things that the user is asking for, and return them in a JSON array. The input may or may not be delimited by a semicolon character. E.g. if the input was: "Help with finding connections in the Singaporean startup scene; Help with finding a job in Singapore", you should return ["finding connections in the Singaporean startup scene", "finding a job in Singapore"]. Please note that the user's requests might not always be separated by semicolons, and they might not always be phrased as 'Help with...'. Your API should be designed to handle a variety of input formats and phrasings.`,
//     seekerResponseId: 'abc-123',
//   });

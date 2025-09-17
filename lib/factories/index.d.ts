import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    askFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        responseId: string;
        communityId: string;
        text: string;
        tags: string[];
    }, "createdAt" | "updatedAt" | "responseId" | "communityId" | "text" | "tags">;
    assessmentFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        communityId: string;
        assessmentRequestId: string;
        seekerResponseId: string;
        seekerAskId: string;
        providerResponseId: string;
        runId: string;
        score: number;
        explanation: string;
        humanScore?: number | undefined;
        isSelected?: boolean | undefined;
        introRequestedAt?: TimestampStub | undefined;
        introRequestText?: string | undefined;
        communityName?: string | undefined;
        providerName?: string | undefined;
        providerEmail?: string | undefined;
        providerHeadline?: string | undefined;
        providerPhotoStoragePath?: string | undefined;
        seekerName?: string | undefined;
        seekerEmail?: string | undefined;
        askSummary?: string | undefined;
    }, ("createdAt" | "updatedAt" | "communityId" | "assessmentRequestId" | "seekerResponseId" | "seekerAskId" | "providerResponseId" | "runId" | "score" | "explanation") | ("humanScore" | "isSelected" | "introRequestedAt" | "introRequestText" | "communityName" | "providerName" | "providerEmail" | "providerHeadline" | "providerPhotoStoragePath" | "seekerName" | "seekerEmail" | "askSummary")>;
    assessmentRequestFactory: import("factory.ts").Factory<{
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
    responseFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        communityId: string;
        name: string;
        uid: string | null;
        helpWanted: string;
        canOffer: string;
        finalizedAt: TimestampStub | null;
        email: string;
        linkedinProfileUrl?: string | undefined;
        linkedinProfile?: {
            name: string;
            headline: string;
            photoUrl: string;
            linkedinProfileUrl: string;
        } | undefined;
    }, ("createdAt" | "updatedAt" | "communityId" | "name" | "uid" | "helpWanted" | "canOffer" | "finalizedAt" | "email") | ("linkedinProfileUrl" | "linkedinProfile")>;
    runFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        communityId: string;
        model: "original";
        assessmentRequestCount: number;
        assessmentCount: number;
        responseCount: number;
        batchSize: number;
        apiRequestsCompletedAt: TimestampStub | null;
        introductionsCompletedAt: TimestampStub | null;
        approvedAt: TimestampStub | null;
        actualApiCostCents?: number | undefined;
        estimatedApiCostCents?: number | undefined;
    }, ("createdAt" | "updatedAt" | "communityId" | "model" | "assessmentRequestCount" | "assessmentCount" | "responseCount" | "batchSize" | "apiRequestsCompletedAt" | "introductionsCompletedAt" | "approvedAt") | ("actualApiCostCents" | "estimatedApiCostCents")>;
    communityFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        name: string;
        coverPictureStoragePath?: string | undefined;
    }, "coverPictureStoragePath" | ("createdAt" | "updatedAt" | "name")>;
    profileFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        name: string;
        uid: string;
        helpWanted?: string | undefined;
        canOffer?: string | undefined;
        headline?: string | undefined;
        photoStoragePath?: string | undefined;
        emailPreferences?: {
            emailInsideCommunities: boolean;
            emailOutsideCommunities: boolean;
        } | undefined;
    }, ("createdAt" | "updatedAt" | "name" | "uid") | ("helpWanted" | "canOffer" | "headline" | "photoStoragePath" | "emailPreferences")>;
    mailFactory: import("factory.ts").Factory<import("..").MailValue<any>, keyof import("..").MailValue<any>>;
};
export { exampleLinkedinProfile } from './exampleData/linkedin';
export { exampleMail } from './exampleData/mail';
export { exampleMailgunWebhook } from './exampleData/mailgunWebhook';

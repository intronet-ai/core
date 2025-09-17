import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    askFactory: import("factory.ts").Factory<{
        id: string;
        description: string;
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        expiredAt?: TimestampStub | undefined;
        fulfilledAt?: TimestampStub | undefined;
        fulfilledByUid?: string | undefined;
    }, ("id" | "description" | "createdAt" | "updatedAt") | ("expiredAt" | "fulfilledAt" | "fulfilledByUid")>;
    assessmentFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        assessmentRequestId: string;
        seekerResponseId: string;
        seekerAskId: string;
        providerResponseId: string;
        runId: string;
        score: number;
        explanation: string;
        communityId: string;
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
    }, ("createdAt" | "updatedAt" | "assessmentRequestId" | "seekerResponseId" | "seekerAskId" | "providerResponseId" | "runId" | "score" | "explanation" | "communityId") | ("humanScore" | "isSelected" | "introRequestedAt" | "introRequestText" | "communityName" | "providerName" | "providerEmail" | "providerHeadline" | "providerPhotoStoragePath" | "seekerName" | "seekerEmail" | "askSummary")>;
    assessmentRequestFactory: import("factory.ts").Factory<{
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
            state: string;
            headline: string;
            accomplishment_patents: any[];
            country: string;
            occupation: string;
            education: any[];
            gender: string;
            city: string;
            people_also_viewed: any[];
            birth_date: string | null;
            inferred_salary: {
                min: number | null;
                max: number | null;
            };
            background_cover_image_url: string;
            industry: string;
            follower_count: number | null;
            recommendations: string[];
            skills: string[];
            accomplishment_publications: any[];
            extra: {
                github_profile_id: string | null;
                twitter_profile_id: string | null;
                facebook_profile_id: string | null;
            };
            personal_numbers: any[];
            volunteer_work: any[];
            public_identifier: string;
            profile_pic_url: string;
            first_name: string;
            connections: number;
            summary: string;
            similarly_named_profiles: any[];
            languages: string[];
            accomplishment_courses: any[];
            groups: any[];
            last_name: string;
            certifications: any[];
            experiences: any[];
            country_full_name: string;
            full_name: string;
            accomplishment_organisations: any[];
            activities: any[];
            personal_emails: string[];
            accomplishment_test_scores: any[];
            interests: any[];
            articles: any[];
            accomplishment_projects: any[];
            accomplishment_honors_awards: any[];
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

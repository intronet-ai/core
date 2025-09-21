import { TimestampStub } from '../utils/TimestampStub';
export declare function makeFactories(TimestampKlass: typeof TimestampStub): {
    askFactory: import("factory.ts").Factory<{
        id: string;
        description: string;
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        source: "whatsapp" | "web";
        communityId: string;
        expiredAt?: TimestampStub | undefined;
        fulfilledAt?: TimestampStub | undefined;
        fulfilledByUid?: string | undefined;
        responseId?: string | undefined;
        communityName?: string | undefined;
    }, ("id" | "description" | "createdAt" | "updatedAt" | "source" | "communityId") | ("expiredAt" | "fulfilledAt" | "fulfilledByUid" | "responseId" | "communityName")>;
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
        communityName?: string | undefined;
        humanScore?: number | undefined;
        isSelected?: boolean | undefined;
        introRequestedAt?: TimestampStub | undefined;
        introRequestText?: string | undefined;
        providerName?: string | undefined;
        providerEmail?: string | undefined;
        providerHeadline?: string | undefined;
        providerPhotoStoragePath?: string | undefined;
        seekerName?: string | undefined;
        seekerEmail?: string | undefined;
        askSummary?: string | undefined;
    }, ("createdAt" | "updatedAt" | "communityId" | "assessmentRequestId" | "seekerResponseId" | "seekerAskId" | "providerResponseId" | "runId" | "score" | "explanation") | ("communityName" | "humanScore" | "isSelected" | "introRequestedAt" | "introRequestText" | "providerName" | "providerEmail" | "providerHeadline" | "providerPhotoStoragePath" | "seekerName" | "seekerEmail" | "askSummary")>;
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
    }, ("createdAt" | "updatedAt" | "communityId" | "seekerResponseId" | "seekerAskId" | "runId" | "prompt" | "providerResponseIds" | "systemMessage" | "sentAt" | "responseReceivedAt" | "error") | ("rawResponse" | "approved" | "actualApiCostCents" | "estimatedApiCostCents")>;
    responseFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        communityId: string;
        name: string;
        finalizedAt: TimestampStub | null;
        email: string;
        uid: string | null;
        helpWanted: string;
        canOffer: string;
        linkedinUserUrl?: string | undefined;
        linkedinUser?: {
            state: string;
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
            headline: string;
            connections: number;
            summary: string;
            similarly_named_users: any[];
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
    }, ("createdAt" | "updatedAt" | "communityId" | "name" | "finalizedAt" | "email" | "uid" | "helpWanted" | "canOffer") | ("linkedinUserUrl" | "linkedinUser")>;
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
        context?: string | undefined;
        botName?: string | undefined;
    }, ("createdAt" | "updatedAt" | "name") | ("coverPictureStoragePath" | "context" | "botName")>;
    profileFactory: import("factory.ts").Factory<{
        createdAt: TimestampStub;
        updatedAt: TimestampStub;
        communityId: string;
        name: string;
        uid: string;
        headline?: string | undefined;
        helpWanted?: string | undefined;
        canOffer?: string | undefined;
        linkedinUser?: {
            state: string;
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
            headline: string;
            connections: number;
            summary: string;
            similarly_named_users: any[];
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
        photoStoragePath?: string | undefined;
        phoneNumber?: string | undefined;
        emailPreferences?: {
            emailInsideCommunities: boolean;
            emailOutsideCommunities: boolean;
        } | undefined;
        isCoordinator?: boolean | undefined;
    }, ("createdAt" | "updatedAt" | "communityId" | "name" | "uid") | ("headline" | "helpWanted" | "canOffer" | "linkedinUser" | "photoStoragePath" | "phoneNumber" | "emailPreferences" | "isCoordinator")>;
    mailFactory: import("factory.ts").Factory<{
        template: {
            name: string;
            data?: any;
        };
        to: string;
        delivery: {
            error: null;
            info: {
                response: string;
                rejected: unknown[];
                pending: unknown[];
                messageId: string;
                accepted: string[];
            };
            startTime: TimestampStub;
            leaseExpireTime: null;
            state: string;
            endTime: TimestampStub;
            attempts: number;
        };
        html?: string | undefined;
        subject?: string | undefined;
        events?: {
            'delivery-status': {
                'session-seconds': number;
                'attempt-no': number;
                code: number;
                utf8: boolean;
                description: string;
                tls: boolean;
                message: string;
                'mx-host': string;
                'certificate-verified': boolean;
            };
            flags: {
                'is-system-test': boolean;
                'is-routed': boolean;
                'is-authenticated': boolean;
                'is-test-mode': boolean;
            };
            storage: {
                url: string;
                key: string;
            };
            message: {
                headers: {
                    subject: string;
                    'message-id': string;
                    from: string;
                    to: string;
                };
                attachments: never[];
                size: number;
            };
            tags: string[];
            'user-variables': {
                'my-var-2': string;
                my_var_1: string;
            };
            envelope: {
                'sending-ip': string;
                sender: string;
                transport: string;
                targets: string;
            };
            campaigns: never[];
            'log-level': string;
            recipient: string;
            id: string;
            'recipient-domain': string;
            event: string;
            timestamp: number;
        }[] | undefined;
        eventsSummary?: Record<string, TimestampStub> | undefined;
    }, ("template" | "to" | "delivery") | ("html" | "subject" | "events" | "eventsSummary")>;
};
export { exampleLinkedinUser } from './exampleData/linkedin';
export { exampleMail } from './exampleData/mail';
export { exampleMailgunWebhook } from './exampleData/mailgunWebhook';

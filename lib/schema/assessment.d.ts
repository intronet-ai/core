import { TimestampStub } from '../utils/TimestampStub';
export interface AssessmentValue {
    createdAt: TimestampStub;
    updatedAt: TimestampStub;
    assessmentRequestId: string;
    seekerResponseId: string;
    seekerAskId: string;
    providerResponseId: string;
    runId: string;
    score: number;
    humanScore?: number;
    explanation: string;
    isSelected?: boolean;
    introRequestedAt?: TimestampStub;
    introRequestText?: string;
    communityId: string;
    communityName?: string;
    providerName?: string;
    providerEmail?: string;
    providerHeadline?: string;
    providerPhotoStoragePath?: string;
    seekerName?: string;
    seekerEmail?: string;
    askSummary?: string;
}

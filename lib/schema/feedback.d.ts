import { Timestamp } from "@google-cloud/firestore";
export interface FeedbackValue {
    uid: string;
    createdAt: Timestamp;
    recordingPath?: string;
    suggestion: string;
    isPublic: boolean;
}

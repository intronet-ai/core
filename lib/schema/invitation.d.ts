import { Timestamp } from "@google-cloud/firestore";
export interface InvitationValue {
    createdAt: Timestamp;
    fromName: string;
    toName: string;
    message: string;
}

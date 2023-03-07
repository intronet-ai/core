import { Timestamp } from "@google-cloud/firestore";
export interface TagCategoryValue {
    uid: string;
    createdAt: Timestamp;
    name: string;
    prompt: string;
    ordinal: number;
    showCheckInLinkInGameplan?: boolean;
}

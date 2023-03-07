import { Timestamp } from "@google-cloud/firestore";
export interface TagValue {
    uid: string;
    createdAt: Timestamp;
    defaultSelected?: boolean;
    categoryId: string;
    categoryName?: string;
    ordinal: number;
    name: string;
    subtext?: string;
    emoji: string;
}

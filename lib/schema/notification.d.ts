import { Timestamp } from "@google-cloud/firestore";
import { ExpoPushMessage } from "expo-server-sdk";
export interface Notification {
    uid: string;
    createdAt: Timestamp;
    key: string;
    args: Partial<ExpoPushMessage>;
}

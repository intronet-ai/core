import { Timestamp } from "@google-cloud/firestore";

export interface MessageValue {
  createdAt: Timestamp;
  fromUid: string;
  text: string;
}

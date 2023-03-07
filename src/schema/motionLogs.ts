import { Timestamp } from "@google-cloud/firestore";

export interface MotionLogValue {
  uid: string;
  createdAt: Timestamp;
}

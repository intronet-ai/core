import { Timestamp } from "@google-cloud/firestore";

export interface PressValue {
  uid: string;
  createdAt: Timestamp;
  impulseId: string;
  buttonId: string;
  pressedAt: Timestamp;
}

import { Timestamp } from "@google-cloud/firestore";

export interface ButtonValue {
  uid: string;
  createdAt: Timestamp;
  buttonId: string;
  source: "manual"; // The source of the sync, currently only manual
}

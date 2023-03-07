import { Timestamp } from "@google-cloud/firestore";
import { ImpulseValue } from "./logs";

export interface QuestValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  description: string;
  isGoal?: boolean;
  icon: string;
  completedAt?: Timestamp;
  patternId: string;

  measure: "impulses" | "motionLogs";
  dailyMinimum?: number;
  dailyMaximum?: number;

  // This is the target number of days
  days: number;

  // Dates of eligible documents, indexed by id
  datesById: { [key: string]: string };
  eligibleDates: Array<string>;

  // This is what we're currently up to
  currentDayCount: number;

  requirements: {
    outcome: ImpulseValue["outcome"];
  };
}

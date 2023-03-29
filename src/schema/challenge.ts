import { Timestamp } from '@google-cloud/firestore';
import { ImpulseLogValue, LogValue } from './logs';

export interface ChallengeValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  description: string;
  icon: string;
  completedAt?: Timestamp;
  isTemplate: boolean;

  // The minimum and maximum number of log records for a day. Usually, we'll only set one of these.
  // For example "wear the impulse button for 5 days" would have a dailyMinimum of 1 and days set to
  // 5.
  days: number; // The target number of days
  dailyMinimum?: number; // The minimum number of eligible logs per day
  dailyMaximum?: number; // The maximum number of eligible logs per day
  consecutive: boolean;

  // What makes an individual log eligible
  logEligibilityRequirements: {
    type?: LogValue['type'];
    outcome?: ImpulseLogValue['outcome'];
  };

  // Dates of eligible log documents, indexed by id
  eligibleLogDatesById: { [key: string]: string };

  // Calculated eligible dates, based on the eligibleLogDatesById. E.g. if there are 3 eligible logs
  // that each have the same date, and we have a daily maximum of 2, then this date is not eligible.
  datesCumulativeProgress: Record<string, number>;

  // This is the number of days that the user has completed the challenge. It's calculated by
  // looking at the eligibleDates relative to today's date.
  currentDayCount: number;
}

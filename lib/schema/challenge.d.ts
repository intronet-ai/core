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
    days: number;
    dailyMinimum?: number;
    dailyMaximum?: number;
    consecutive: boolean;
    logEligibilityRequirements: {
        type?: LogValue['type'];
        outcome?: ImpulseLogValue['outcome'];
    };
    eligibleLogDatesById: {
        [key: string]: string;
    };
    datesCumulativeProgress: Record<string, number>;
    currentDayCount: number;
}

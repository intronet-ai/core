import { Timestamp } from '@google-cloud/firestore';
import * as Location from 'expo-location';
import { WithId } from '../types/types';
import { TacticValue } from './tactic';
export type Outcome = 'success' | 'setback' | 'indeterminate';
interface BaseLogValue {
    uid: string;
    createdAt: Timestamp;
    isDisplayable: boolean;
    startTime: Timestamp;
    timezone: string;
    location: Partial<Location.LocationObjectCoords>;
    locationIsFetching: boolean;
    locationFormatted?: string;
    tacticsSummary?: Record<string, string>;
    patternsSummary?: Record<string, string>;
}
export type TacticsLogValue = BaseLogValue & {
    type: 'tactic';
    tactic: WithId<TacticValue>;
};
export type MotionLogValue = BaseLogValue & {
    type: 'motion';
};
export type ButtonLogValue = BaseLogValue & {
    type: 'button';
    characteristics: Record<string, unknown>;
};
export type ImpulseLogValue = BaseLogValue & {
    type: 'impulse';
    pressCount?: number;
    outcome: Outcome;
    buttonPressSecondsSinceEpoch?: number;
    patternIds: Array<string>;
    debriefNotes?: string;
    debriefReminderSentAt?: Timestamp | null;
    debriefedAt?: Timestamp | null;
};
export type LogValue = TacticsLogValue | ImpulseLogValue | MotionLogValue | ButtonLogValue;
export {};

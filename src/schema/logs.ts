import { Timestamp } from '@google-cloud/firestore';
import * as Location from 'expo-location';
import { WithId } from '../types/types';
import { PatternValue } from './pattern';
import { TacticValue } from './tactic';

// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

interface BaseLogValue {
  uid: string;
  createdAt: Timestamp;
  isDisplayable: boolean;
  startTime: Timestamp;
  timezone: string;
  title: string;
  location: Partial<Location.LocationObjectCoords>;
  locationIsFetching: boolean;
  locationFormatted?: string;
  checkInText?: string;
  tacticsSummary?: Record<string, string>;
}

export type TacticsLogValue = BaseLogValue & {
  type: 'tactic';
  tactic: WithId<TacticValue>;
};

export type DebriefLogValue = BaseLogValue & {
  type: 'debrief';
};

export type ImpulseLogValue = BaseLogValue & {
  type: 'impulse';
  pressCount?: number;
  outcome: Outcome;
  buttonPressSecondsSinceEpoch?: number;
  patterns: Array<PatternValue & { _applied: boolean; _usage?: number }>;
  debriefReminderSentAt?: Timestamp | null;
};

export type LogValue = TacticsLogValue | ImpulseLogValue;

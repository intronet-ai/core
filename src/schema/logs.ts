import { Timestamp } from '@google-cloud/firestore';
import * as Location from 'expo-location';
import { WithId } from '../types/types';
import { DebriefQuestionValue } from './debriefQuestion';
import { PatternValue } from './pattern';
import { TacticValue } from './tactic';
import { TagValue } from './tag';

// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

interface BaseLogValue {
  uid: string;
  createdAt: Timestamp;
  isDisplayable: boolean;
  isTemplate: boolean;
  startTime: Timestamp;
  timezone: string;
  location: Partial<Location.LocationObjectCoords>;
  locationIsFetching: boolean;
  locationFormatted?: string;
  buttonPressSecondsSinceEpoch?: number;
  checkInText?: string;
  // We store all impulse types, tactics and tags that were offered at the time, plus the ids of
  // those that were applied/selected
  tags: RecordsWithMeta<WithId<TagValue>, { applied: boolean; value?: number }>;
  tagIds: Array<string>;
  tactics: RecordsWithMeta<
    TacticValue,
    { applied: boolean; response?: string }
  >;
  tacticIds: Array<string>;
}

export type TacticsLogValue = BaseLogValue & {
  type: 'tactics';
};

export type ImpulseLogValue = BaseLogValue & {
  type: 'impulse';
} & DebriefProperties;

export type LogValue = TacticsLogValue | ImpulseLogValue;

interface DebriefProperties {
  outcome: Outcome;
  pressCount?: number;
  debriefed?: boolean;
  debriefedAt?: Timestamp | null;
  debriefReminderSentAt?: Timestamp | null;
  isPracticeMode?: boolean;
  // We keep copies of these records with metadata
  debriefQuestions: RecordsWithMeta<DebriefQuestionValue, { response: string }>;
  patterns: RecordsWithMeta<PatternValue, { applied: boolean; usage?: number }>;
  patternIds: Array<string>;
}

export type RecordsWithMeta<R, M> = ({
  record: WithId<R>;
} & M)[];

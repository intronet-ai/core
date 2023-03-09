import { Timestamp } from '@google-cloud/firestore';
import * as Location from 'expo-location';
import { WithId } from '../types/types';
import { DebriefQuestionValue } from './debriefQuestion';
import { PatternValue } from './pattern';
import { TacticValue } from './tactic';
import { TagValue } from './tag';
import { TagCategoryValue } from './tagCategory';
export type Outcome = 'success' | 'setback' | 'indeterminate';
interface BaseLogValue {
    uid: string;
    createdAt: Timestamp;
    isDisplayable: boolean;
    startTime: Timestamp;
    timezone: string;
    location: Partial<Location.LocationObjectCoords>;
    locationFormatted?: string;
    buttonPressSecondsSinceEpoch?: number;
    checkInText?: string;
    tagCategories: RecordsWithMeta<WithId<TagCategoryValue>, {}>;
    tags: RecordsWithMeta<WithId<TagValue>, {
        applied: boolean;
        value?: number;
    }>;
    tagIds: Array<string>;
    tactics: RecordsWithMeta<TacticValue, {
        applied: boolean;
        response?: string;
    }>;
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
    debriefQuestions: RecordsWithMeta<DebriefQuestionValue, {
        response: string;
    }>;
    patterns: RecordsWithMeta<PatternValue, {
        applied: boolean;
        usage?: number;
    }>;
    patternIds: Array<string>;
}
export type RecordsWithMeta<R, M> = ({
    record: WithId<R>;
} & M)[];
export {};

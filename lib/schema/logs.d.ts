import { Timestamp } from "@google-cloud/firestore";
import * as Location from "expo-location";
import { WithId } from "../types/types";
import { DebriefQuestionValue } from "./debriefQuestion";
import { PatternValue } from "./pattern";
import { TacticValue } from "./tactic";
import { TagValue } from "./tag";
import { TagCategoryValue } from "./tagCategory";
export type RecordsWithMeta<R, M> = ({
    record: WithId<R>;
} & M)[];
export type Outcome = "success" | "setback" | "indeterminate";
export interface BaseLog {
    uid: string;
    createdAt: Timestamp;
    startTime: Timestamp;
    timezone: string;
    location: Location.LocationObjectCoords;
    locationFormatted?: string;
}
interface TrackProperties {
    buttonPressSecondsSinceEpoch?: number;
    checkInText?: string;
    tagCategories: RecordsWithMeta<WithId<TagCategoryValue>, {}>;
    tags: RecordsWithMeta<WithId<TagValue>, {
        applied: boolean;
        value?: number;
    }>;
    tagIds: Array<string>;
}
interface ActProperties {
    tactics: RecordsWithMeta<TacticValue, {
        applied: boolean;
        response?: string;
    }>;
}
interface DebriefProperties {
    outcome: Outcome;
    debriefed?: boolean;
    debriefedAt?: Timestamp;
    isPracticeMode?: boolean;
    practiceNotes: string;
    debriefQuestions: RecordsWithMeta<DebriefQuestionValue, {
        response: string;
    }>;
    patterns: RecordsWithMeta<PatternValue, {
        applied: boolean;
        usage?: number;
    }>;
    patternIds: Array<string>;
}
export type ImpulseValue = {
    type: "impulse";
    rescueMode?: boolean;
} & BaseLog & TrackProperties & ActProperties & DebriefProperties & {
    pressCount?: number;
};
export type CheckInValue = {
    type: "checkIn";
} & BaseLog & TrackProperties;
export type BoosterValue = {
    type: "booster";
} & BaseLog & ActProperties;
export {};

import { Timestamp } from '@google-cloud/firestore';
import { WithId } from '../types/types';
import { TagValue } from './tag';
export type CheckInTagEntry = {
    from: {
        id: string;
        name: string;
        emoji: string;
    };
    to: {
        id: string;
        name: string;
        emoji: string;
    };
    value: number | null;
};
export interface ImageValue {
    createdAt: Timestamp;
    localFilePath: string;
    filePath: string;
}
interface TacticValueBase<K> {
    type?: K;
    uid: string;
    originalId?: string;
    createdAt: Timestamp;
    ordinal: number;
    text: string;
    title?: string;
    subtitle?: string;
    image?: {
        uri: string;
    };
    language?: string;
    href?: string;
    isSharingEnabled: boolean;
    showTitleField?: boolean;
    isTemplate?: boolean;
    showResponseBox?: boolean;
    deviceTimeRemindersDigest?: string;
    deviceLocationRemindersDigest?: string;
    dataDigest?: string;
    patternIds: Array<string>;
    allPatterns?: boolean;
    checkInEntries?: CheckInTagEntry[];
    remindersSummary?: Array<string>;
}
export type SpotifyEpisodeTactic = TacticValueBase<'spotifyEpisode'> & {
    metadata: {
        episodeId: string;
        durationMs: number;
        durationFormatted: string;
    };
};
export type SpotifyTrackTactic = TacticValueBase<'spotifyTrack'> & {
    metadata: {
        episodeId: string;
        durationMs: number;
    };
};
export type FeelingsTactic = TacticValueBase<'feelings'> & {
    tags: Array<WithId<TagValue>>;
};
type YouTubeTactic = TacticValueBase<'youtube'>;
type WebsiteTactic = TacticValueBase<'website'>;
type QuestionTactic = TacticValueBase<'question'>;
type TaskTactic = TacticValueBase<'task'>;
export type TacticValue = SpotifyEpisodeTactic | SpotifyTrackTactic | YouTubeTactic | WebsiteTactic | QuestionTactic | FeelingsTactic | TaskTactic;
export {};

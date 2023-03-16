import { Timestamp } from '@google-cloud/firestore';
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
    deviceRemindersDigest?: string;
    dataDigest?: string;
    patternIds: Array<string>;
    tags?: Array<string>;
    remindersSummary?: string;
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
type FeelingsTactic = TacticValueBase<'feelings'>;
type YouTubeTactic = TacticValueBase<'youtube'>;
type WebsiteTactic = TacticValueBase<'website'>;
type QuestionTactic = TacticValueBase<'question'>;
type TaskTactic = TacticValueBase<'task'>;
export type TacticValue = SpotifyEpisodeTactic | SpotifyTrackTactic | YouTubeTactic | WebsiteTactic | QuestionTactic | FeelingsTactic | TaskTactic;
export {};

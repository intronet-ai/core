import { Timestamp } from "@google-cloud/firestore";
export interface ImageValue {
    createdAt: Timestamp;
    localFilePath: string;
    filePath: string;
}
interface TacticValueBase<K> {
    type: K;
    uid: string;
    originalId?: string;
    createdAt: Timestamp;
    ordinal: number;
    text: string;
    title: string;
    subtitle: string;
    image: {
        uri: string;
    };
    language: string;
    href: string;
    commentCount: number;
    isSharingEnabled: boolean;
    description: string;
    showTitleField?: boolean;
    showResponseBox?: boolean;
    deviceRemindersDigest?: string;
    dataDigest?: string;
    tags?: Array<string>;
    patternIds: Array<string>;
    reminderTimes: Array<{
        days: Array<string>;
        seconds: number;
    }>;
    reminderLocations: [];
    remindersSummary?: string;
}
export type SpotifyEpisodeTactic = TacticValueBase<"spotifyEpisode"> & {
    metadata: {
        episodeId: string;
        durationMs: number;
        durationFormatted: string;
    };
};
export type SpotifyTrackTactic = TacticValueBase<"spotifyTrack"> & {
    metadata: {
        episodeId: string;
        durationMs: number;
    };
};
type YouTubeTactic = TacticValueBase<"youtube">;
type WebsiteTactic = TacticValueBase<"website">;
type QuestionTactic = TacticValueBase<"question">;
type TaskTactic = TacticValueBase<"task">;
export type TacticValue = SpotifyEpisodeTactic | SpotifyTrackTactic | YouTubeTactic | WebsiteTactic | QuestionTactic | TaskTactic;
export {};

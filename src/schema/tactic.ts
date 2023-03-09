import { Timestamp } from '@google-cloud/firestore';

export interface ImageValue {
  createdAt: Timestamp;
  localFilePath: string;
  filePath: string;
}

// interface StorageFile {
//   localFilePath: string;
//   remoteFilePath: string;
//   localDeviceId: string;
//   meta: Record<string, unknown>;
// }

interface TacticValueBase<K> {
  type?: K;
  uid: string;
  originalId?: string;
  createdAt: Timestamp;
  ordinal: number;
  text: string;
  title?: string;
  subtitle?: string;
  image?: { uri: string };
  language?: string;
  href?: string;
  isSharingEnabled: boolean;
  showTitleField?: boolean;
  isTemplate?: boolean;

  // In impulse moments, do we want to show a field for collecting a response? This is the case for
  // questions, like "How are you feeling right now?"
  showResponseBox?: boolean;

  // An MD5 hash that represents the state of reminders synced with the phone
  deviceRemindersDigest?: string;
  dataDigest?: string;

  patternIds: Array<string>;
  tags?: Array<string>;

  // Reminders
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

type YouTubeTactic = TacticValueBase<'youtube'>;
type WebsiteTactic = TacticValueBase<'website'>;
type QuestionTactic = TacticValueBase<'question'>;
type TaskTactic = TacticValueBase<'task'>;

export type TacticValue =
  | SpotifyEpisodeTactic
  | SpotifyTrackTactic
  | YouTubeTactic
  | WebsiteTactic
  | QuestionTactic
  | TaskTactic;

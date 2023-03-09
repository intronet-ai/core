import { Timestamp } from '@google-cloud/firestore';

export interface DebriefQuestionValue {
  uid: string;
  createdAt: Timestamp;
  prompt: string;
  ordinal: number;
  showForSuccesses?: true;
  showForSetbacks?: true;
  showForAllPatterns?: true;
}

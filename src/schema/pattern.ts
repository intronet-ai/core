import { Timestamp } from '@google-cloud/firestore';

export interface PatternValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  unit: 'time' | 'custom';
  customUnit?: string;
  setbackDefinition?: string;
  debriefAfterMinutes: number;

  notification?: {
    title: string;
    body: string;
  };
}

import { Timestamp } from '@google-cloud/firestore';

// We don't add a trailing "Value" to the interface name as this isn't stored in a collection, only
// as JSON for the dimension
export interface TagValue {
  uid: string;
  createdAt: Timestamp;
  defaultSelected?: boolean;
  tacticId: string;
  tacticName?: string; // This is written into impulse documents for easy reading
  ordinal: number;
  name: string;
  subtext?: string;
  emoji: string;
}

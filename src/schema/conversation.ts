import { Timestamp } from '@google-cloud/firestore';

export interface ConversationValue {
  templateId?: string;
  everythingPermissions?: boolean;
  participantUids: Array<string>;
  groupName: string;
  thumbnailUrl: string;
  lastUpdated: Timestamp;
  lastMessagePreview?: string;
  lastMessageUid?: string;
  isTemplate?: boolean;
  unreadCounts: { [uid: string]: number };
  permissions: ConversationPermissions;
}

export type PermissionKey = keyof typeof CONVERSATION_PERMISSIONS;
export type ConversationPermissions = {
  [patternId: string]: {
    [key in PermissionKey]: boolean;
  };
};

export const CONVERSATION_PERMISSIONS = {
  logs: 'Share my logs',
  tactics: 'Share my tactics',
  tacticsEdit: 'Allow to edit my tactics',
  insights: 'Share my insights',
};

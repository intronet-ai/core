import { Timestamp } from '@google-cloud/firestore';
import { AppStateStatus } from 'react-native';
export interface ProfileValue {
    uid: string;
    createdAt: Timestamp;
    buttonId?: string;
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
    activeImpulseId?: string;
    email: string;
    currentAppState?: AppStateStatus;
    showStorybook?: boolean;
    lastActiveAt?: Timestamp;
    expoPushToken?: string;
    releaseChannel?: 'default' | 'canary';
    displayName?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    region?: string | null;
    timezone?: string;
    isReadyForTour?: boolean;
    isTourCompleted?: boolean;
    isButtonSetupSkipped?: boolean;
    invitationCode: string;
}

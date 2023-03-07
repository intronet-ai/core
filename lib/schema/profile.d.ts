import { Timestamp } from "@google-cloud/firestore";
import { AppStateStatus } from "react-native";
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
export interface ProfileValue {
    uid: string;
    createdAt: Timestamp;
    buttonId?: string;
    isAdmin?: boolean;
    activeImpulseId?: string;
    displayName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    currentAppState?: AppStateStatus;
    showStorybook?: boolean;
    lastActiveAt?: Timestamp;
    expoPushToken?: string;
    releaseChannel?: "default" | "canary";
    debriefAfterSeconds: number;
    isReadyForTour?: boolean;
    isTourCompleted?: boolean;
    isButtonSetupSkipped?: boolean;
    region: string | null;
    timezone: string;
    invitationCode: string;
    checkInEntries: CheckInTagEntry[];
    impulseNotification: {
        title: string;
        body: string;
    };
}

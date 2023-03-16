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

  // While we typically expect these properties to be set, there is a short period where they are
  // unset, as firebase does not allow for creating user records with metadata (it must be set after
  // create)
  displayName?: string;
  firstName?: string;
  lastName?: string;
  nickName?: string;
  region?: string | null;
  timezone?: string;

  // We track a few flags that relate to the state of the profile and onboarding
  isReadyForTour?: boolean;
  isTourCompleted?: boolean;
  isButtonSetupSkipped?: boolean;

  invitationCode: string;
}

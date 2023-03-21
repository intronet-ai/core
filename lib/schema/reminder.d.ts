import { Timestamp } from '@google-cloud/firestore';
interface ReminderValueBase {
    uid: string;
    createdAt: Timestamp;
    tacticId: string;
}
export type TimeReminderValue = ReminderValueBase & {
    type: 'time';
    weekdays: Array<number>;
    hour: number;
    minute: number;
    scheduledNotificationIds?: Array<string>;
};
export type LocationReminderValue = ReminderValueBase & {
    type: 'location';
    locationId: string;
    mode: 'enter' | 'exit';
};
export type ReminderValue = TimeReminderValue | LocationReminderValue;
export {};

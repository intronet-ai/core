import { Timestamp } from "@google-cloud/firestore";
export interface ApplicationValue {
    createdAt: Timestamp;
    dateOfBirth: string;
    email: string;
    duration: string;
    gender: string;
    location: string;
    message: string;
    name: string;
    payment: string;
    phone: string;
    survey: string;
    type: string;
}

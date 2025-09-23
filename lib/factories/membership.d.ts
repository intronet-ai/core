import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeMembershipFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    communityId: string;
    uid: string;
    invitationCode: string;
    isCoordinator: boolean;
    createdAt?: TimestampStub | undefined;
    updatedAt?: TimestampStub | undefined;
    acceptedAt?: TimestampStub | undefined;
    revokedAt?: TimestampStub | undefined;
}, ("communityId" | "uid" | "invitationCode" | "isCoordinator") | ("createdAt" | "updatedAt" | "acceptedAt" | "revokedAt")>;

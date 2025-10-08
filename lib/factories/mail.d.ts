import * as Factory from 'factory.ts';
import { TimestampStub } from '../utils/TimestampStub';
export declare const makeMailFactory: (TimestampKlass: typeof TimestampStub) => Factory.Sync.Factory<{
    template: {
        name: string;
        data?: any;
    };
    to: string;
    delivery: {
        error: null;
        info: {
            pending: unknown[];
            messageId: string;
            response: string;
            rejected: unknown[];
            accepted: string[];
        };
        startTime: TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: TimestampStub;
        attempts: number;
    };
    html?: string | undefined;
    subject?: string | undefined;
    events?: {
        'delivery-status': {
            'session-seconds': number;
            'attempt-no': number;
            code: number;
            utf8: boolean;
            description: string;
            tls: boolean;
            message: string;
            'mx-host': string;
            'certificate-verified': boolean;
        };
        flags: {
            'is-system-test': boolean;
            'is-routed': boolean;
            'is-authenticated': boolean;
            'is-test-mode': boolean;
        };
        storage: {
            url: string;
            key: string;
        };
        message: {
            headers: {
                subject: string;
                'message-id': string;
                from: string;
                to: string;
            };
            attachments: never[];
            size: number;
        };
        tags: string[];
        'user-variables': {
            'my-var-2': string;
            my_var_1: string;
        };
        envelope: {
            'sending-ip': string;
            sender: string;
            transport: string;
            targets: string;
        };
        campaigns: never[];
        'log-level': string;
        recipient: string;
        id: string;
        'recipient-domain': string;
        event: string;
        timestamp: number;
    }[] | undefined;
    eventsSummary?: Record<string, TimestampStub> | undefined;
}, ("template" | "to" | "delivery") | ("html" | "subject" | "events" | "eventsSummary")>;

import { z } from 'zod';
export declare const mailgunWebhookValueSchema: z.ZodObject<{
    'event-data': z.ZodType<{
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
    }, z.ZodTypeDef, {
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
    }>;
    createdAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    updatedAt: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
    signature: z.ZodObject<{
        signature: z.ZodString;
        timestamp: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        timestamp: string;
        token: string;
    }, {
        signature: string;
        timestamp: string;
        token: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    'event-data': {
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
    };
    signature: {
        signature: string;
        timestamp: string;
        token: string;
    };
}, {
    createdAt: import("../utils/TimestampStub").TimestampStub;
    updatedAt: import("../utils/TimestampStub").TimestampStub;
    'event-data': {
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
    };
    signature: {
        signature: string;
        timestamp: string;
        token: string;
    };
}>;
export type MailgunWebhookValue = z.infer<typeof mailgunWebhookValueSchema>;

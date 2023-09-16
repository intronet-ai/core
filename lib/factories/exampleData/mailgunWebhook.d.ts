export type MailgunEvent = (typeof exampleMailgunWebhook)['event-data'];
export declare const exampleMailgunWebhook: {
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    signature: {
        signature: string;
        token: string;
        timestamp: string;
    };
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
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
};

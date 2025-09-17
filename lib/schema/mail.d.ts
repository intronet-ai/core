import { z } from 'zod';
import { timestampStubSchema } from './common';
import { MailgunEvent } from '../factories/exampleData/mailgunWebhook';
export declare const mailValueSchema: <T extends z.ZodTypeAny>(dataSchema: T) => z.ZodObject<{
    template: z.ZodObject<{
        data: T;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any>[k]; } : never, z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }>[k_1]; } : never>;
    to: z.ZodString;
    delivery: z.ZodObject<{
        startTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        error: z.ZodNull;
        leaseExpireTime: z.ZodNull;
        state: z.ZodString;
        endTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        info: z.ZodObject<{
            rejected: z.ZodArray<z.ZodUnknown, "many">;
            response: z.ZodString;
            pending: z.ZodArray<z.ZodUnknown, "many">;
            messageId: z.ZodString;
            accepted: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }>;
        attempts: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }>;
    html: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodType<{
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
    }>, "many">>;
    eventsSummary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    template: z.ZodObject<{
        data: T;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any>[k]; } : never, z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }>[k_1]; } : never>;
    to: z.ZodString;
    delivery: z.ZodObject<{
        startTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        error: z.ZodNull;
        leaseExpireTime: z.ZodNull;
        state: z.ZodString;
        endTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        info: z.ZodObject<{
            rejected: z.ZodArray<z.ZodUnknown, "many">;
            response: z.ZodString;
            pending: z.ZodArray<z.ZodUnknown, "many">;
            messageId: z.ZodString;
            accepted: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }>;
        attempts: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }>;
    html: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodType<{
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
    }>, "many">>;
    eventsSummary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>>;
}>, any> extends infer T_3 ? { [k_2 in keyof T_3]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    template: z.ZodObject<{
        data: T;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any>[k]; } : never, z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }>[k_1]; } : never>;
    to: z.ZodString;
    delivery: z.ZodObject<{
        startTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        error: z.ZodNull;
        leaseExpireTime: z.ZodNull;
        state: z.ZodString;
        endTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        info: z.ZodObject<{
            rejected: z.ZodArray<z.ZodUnknown, "many">;
            response: z.ZodString;
            pending: z.ZodArray<z.ZodUnknown, "many">;
            messageId: z.ZodString;
            accepted: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }>;
        attempts: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }>;
    html: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodType<{
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
    }>, "many">>;
    eventsSummary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>>;
}>, any>[k_2]; } : never, z.baseObjectInputType<{
    template: z.ZodObject<{
        data: T;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any>[k]; } : never, z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }>[k_1]; } : never>;
    to: z.ZodString;
    delivery: z.ZodObject<{
        startTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        error: z.ZodNull;
        leaseExpireTime: z.ZodNull;
        state: z.ZodString;
        endTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        info: z.ZodObject<{
            rejected: z.ZodArray<z.ZodUnknown, "many">;
            response: z.ZodString;
            pending: z.ZodArray<z.ZodUnknown, "many">;
            messageId: z.ZodString;
            accepted: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }>;
        attempts: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }>;
    html: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodType<{
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
    }>, "many">>;
    eventsSummary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>>;
}> extends infer T_4 ? { [k_3 in keyof T_4]: z.baseObjectInputType<{
    template: z.ZodObject<{
        data: T;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        data: T;
        name: z.ZodString;
    }>, any>[k]; } : never, z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
        data: T;
        name: z.ZodString;
    }>[k_1]; } : never>;
    to: z.ZodString;
    delivery: z.ZodObject<{
        startTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        error: z.ZodNull;
        leaseExpireTime: z.ZodNull;
        state: z.ZodString;
        endTime: z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>;
        info: z.ZodObject<{
            rejected: z.ZodArray<z.ZodUnknown, "many">;
            response: z.ZodString;
            pending: z.ZodArray<z.ZodUnknown, "many">;
            messageId: z.ZodString;
            accepted: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }, {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        }>;
        attempts: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }, {
        error: null;
        info: {
            response: string;
            rejected: unknown[];
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        startTime: import("../utils/TimestampStub").TimestampStub;
        leaseExpireTime: null;
        state: string;
        endTime: import("../utils/TimestampStub").TimestampStub;
        attempts: number;
    }>;
    html: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodType<{
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
    }>, "many">>;
    eventsSummary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>>;
}>[k_3]; } : never>;
export type MailValue<T> = {
    template: {
        data: T;
        name: string;
    };
    to: string;
    delivery: {
        startTime: z.infer<typeof timestampStubSchema>;
        error: null;
        leaseExpireTime: null;
        state: string;
        endTime: z.infer<typeof timestampStubSchema>;
        info: {
            rejected: unknown[];
            response: string;
            pending: unknown[];
            messageId: string;
            accepted: string[];
        };
        attempts: number;
    };
    html?: string;
    subject?: string;
    events?: Array<MailgunEvent>;
    eventsSummary?: Record<string, z.infer<typeof timestampStubSchema>>;
};

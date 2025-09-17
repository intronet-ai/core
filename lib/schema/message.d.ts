import { z } from 'zod';
export declare const roleSchema: z.ZodEnum<["user", "assistant", "tool", "system"]>;
export declare const toolCallSchema: z.ZodObject<{
    name: z.ZodString;
    role: z.ZodEnum<["user", "assistant", "tool", "system"]>;
    args: z.ZodOptional<z.ZodUnknown>;
    result: z.ZodOptional<z.ZodUnknown>;
    status: z.ZodOptional<z.ZodEnum<["started", "success", "error"]>>;
    errorMessage: z.ZodOptional<z.ZodString>;
    startedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    completedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    role: "user" | "assistant" | "tool" | "system";
    status?: "error" | "started" | "success" | undefined;
    args?: unknown;
    result?: unknown;
    errorMessage?: string | undefined;
    startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
}, {
    name: string;
    role: "user" | "assistant" | "tool" | "system";
    status?: "error" | "started" | "success" | undefined;
    args?: unknown;
    result?: unknown;
    errorMessage?: string | undefined;
    startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
}>;
export declare const userMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"user">;
    message: z.ZodString;
    senderId: z.ZodString;
    senderName: z.ZodString;
    senderAvatarUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "user";
    senderId: string;
    senderName: string;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    senderAvatarUrl?: string | undefined;
}, {
    message: string;
    role: "user";
    senderId: string;
    senderName: string;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    senderAvatarUrl?: string | undefined;
}>;
export declare const assistantMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"assistant">;
    message: z.ZodString;
    toolCall: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        role: z.ZodEnum<["user", "assistant", "tool", "system"]>;
        args: z.ZodOptional<z.ZodUnknown>;
        result: z.ZodOptional<z.ZodUnknown>;
        status: z.ZodOptional<z.ZodEnum<["started", "success", "error"]>>;
        errorMessage: z.ZodOptional<z.ZodString>;
        startedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
        completedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "assistant";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    toolCall?: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    } | undefined;
}, {
    message: string;
    role: "assistant";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    toolCall?: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    } | undefined;
}>;
export declare const toolMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"tool">;
    message: z.ZodString;
    toolCall: z.ZodObject<{
        name: z.ZodString;
        role: z.ZodEnum<["user", "assistant", "tool", "system"]>;
        args: z.ZodOptional<z.ZodUnknown>;
        result: z.ZodOptional<z.ZodUnknown>;
        status: z.ZodOptional<z.ZodEnum<["started", "success", "error"]>>;
        errorMessage: z.ZodOptional<z.ZodString>;
        startedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
        completedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "tool";
    toolCall: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    };
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}, {
    message: string;
    role: "tool";
    toolCall: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    };
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}>;
export declare const systemMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"system">;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "system";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}, {
    message: string;
    role: "system";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}>;
export declare const messageSchema: z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"user">;
    message: z.ZodString;
    senderId: z.ZodString;
    senderName: z.ZodString;
    senderAvatarUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "user";
    senderId: string;
    senderName: string;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    senderAvatarUrl?: string | undefined;
}, {
    message: string;
    role: "user";
    senderId: string;
    senderName: string;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    senderAvatarUrl?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"assistant">;
    message: z.ZodString;
    toolCall: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        role: z.ZodEnum<["user", "assistant", "tool", "system"]>;
        args: z.ZodOptional<z.ZodUnknown>;
        result: z.ZodOptional<z.ZodUnknown>;
        status: z.ZodOptional<z.ZodEnum<["started", "success", "error"]>>;
        errorMessage: z.ZodOptional<z.ZodString>;
        startedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
        completedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "assistant";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    toolCall?: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    } | undefined;
}, {
    message: string;
    role: "assistant";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    toolCall?: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"tool">;
    message: z.ZodString;
    toolCall: z.ZodObject<{
        name: z.ZodString;
        role: z.ZodEnum<["user", "assistant", "tool", "system"]>;
        args: z.ZodOptional<z.ZodUnknown>;
        result: z.ZodOptional<z.ZodUnknown>;
        status: z.ZodOptional<z.ZodEnum<["started", "success", "error"]>>;
        errorMessage: z.ZodOptional<z.ZodString>;
        startedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
        completedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }, {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "tool";
    toolCall: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    };
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}, {
    message: string;
    role: "tool";
    toolCall: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    };
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../utils/TimestampStub").TimestampStub, z.ZodTypeDef, import("../utils/TimestampStub").TimestampStub>>;
} & {
    role: z.ZodLiteral<"system">;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    role: "system";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}, {
    message: string;
    role: "system";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
}>]>;
export type Role = z.infer<typeof roleSchema>;
export type ToolCall = z.infer<typeof toolCallSchema>;
export type UserMessage = z.infer<typeof userMessageSchema>;
export type AssistantMessage = z.infer<typeof assistantMessageSchema>;
export type ToolMessage = z.infer<typeof toolMessageSchema>;
export type SystemMessage = z.infer<typeof systemMessageSchema>;
export type Message = UserMessage | AssistantMessage | ToolMessage | SystemMessage;
export declare const isUserMessage: (message: Message) => message is {
    message: string;
    role: "user";
    senderId: string;
    senderName: string;
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    senderAvatarUrl?: string | undefined;
};
export declare const isAssistantMessage: (message: Message) => message is {
    message: string;
    role: "assistant";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
    toolCall?: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    } | undefined;
};
export declare const isToolMessage: (message: Message) => message is {
    message: string;
    role: "tool";
    toolCall: {
        name: string;
        role: "user" | "assistant" | "tool" | "system";
        status?: "error" | "started" | "success" | undefined;
        args?: unknown;
        result?: unknown;
        errorMessage?: string | undefined;
        startedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
        completedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    };
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
};
export declare const isSystemMessage: (message: Message) => message is {
    message: string;
    role: "system";
    createdAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    updatedAt?: import("../utils/TimestampStub").TimestampStub | undefined;
    id?: string | undefined;
};

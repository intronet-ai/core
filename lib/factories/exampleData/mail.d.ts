export declare const exampleMail: {
    template: {
        data: {
            seekerName: string;
            communityName: string;
            text: string;
            title: string;
        };
        name: string;
    };
    to: string;
    delivery: {
        startTime: {
            _seconds: number;
            _nanoseconds: number;
        };
        error: null;
        leaseExpireTime: null;
        state: string;
        endTime: {
            _seconds: number;
            _nanoseconds: number;
        };
        info: {
            rejected: never[];
            response: string;
            pending: never[];
            messageId: string;
            accepted: string[];
        };
        attempts: number;
    };
};

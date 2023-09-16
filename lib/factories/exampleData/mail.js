"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleMail = void 0;
exports.exampleMail = {
    template: {
        data: {
            seekerName: 'Jay',
            communityName: 'Hitchhiker',
            text: "Hey friend, let's connect?",
            title: 'Jay would like to connect',
        },
        name: 'introRequest',
    },
    to: 'michael@intronet.ai',
    delivery: {
        startTime: { _seconds: 1693407835, _nanoseconds: 220000000 },
        error: null,
        leaseExpireTime: null,
        state: 'SUCCESS',
        endTime: { _seconds: 1693407838, _nanoseconds: 148000000 },
        info: {
            rejected: [],
            response: '250 Great success',
            pending: [],
            messageId: '<5fdcf3ad-9ebc-6836-5840-77e4c25e25a6@intronet.ai>',
            accepted: ['michael@intronet.ai'],
        },
        attempts: 1,
    },
};

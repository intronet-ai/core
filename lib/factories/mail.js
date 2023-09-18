"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMailFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeMailFactory = (TimestampKlass) => Factory.makeFactory({
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
        startTime: TimestampKlass.now(),
        error: null,
        leaseExpireTime: null,
        state: 'SUCCESS',
        endTime: TimestampKlass.now(),
        info: {
            rejected: [],
            response: '250 Great success',
            pending: [],
            messageId: '<5fdcf3ad-9ebc-6836-5840-77e4c25e25a6@intronet.ai>',
            accepted: ['michael@intronet.ai'],
        },
        attempts: 1,
    },
});
exports.makeMailFactory = makeMailFactory;

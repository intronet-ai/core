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
exports.Timestamp = exports.storage = exports.auth = exports.firestore = exports.projectId = exports.appEnv = exports.serviceAccount = void 0;
const admin = __importStar(require("firebase-admin"));
const isProduction = process.env.NODE_ENV === 'production';
const serviceAccounts = {
    'intronet-88bc5': require('../../admin-service-account.production.json'),
    'intronet-tests': require('../../admin-service-account.staging.json'),
    'intronet-restore': require('../../admin-service-account.restore.json'),
    production: '',
};
serviceAccounts.production = serviceAccounts['intronet-88bc5'];
const project = (process.env.FIREBASE_PROJECT ||
    'intronet-tests');
exports.serviceAccount = isProduction
    ? serviceAccounts.production
    : serviceAccounts[project];
exports.appEnv = isProduction ? 'production' : 'staging';
exports.projectId = exports.serviceAccount.project_id;
admin.initializeApp({
    projectId: exports.projectId,
    credential: admin.credential.cert(exports.serviceAccount),
});
exports.firestore = admin.firestore();
exports.auth = admin.auth();
exports.storage = admin.storage();
exports.Timestamp = admin.firestore.Timestamp;
exports.default = admin;

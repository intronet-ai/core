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
exports.appEnv = exports.projectId = exports.Timestamp = exports.storage = exports.auth = exports.firestore = void 0;
const admin = __importStar(require("firebase-admin"));
// Initialize Firebase Admin with environment-based configuration
// Service accounts should be provided by the consuming application
const initializeFirebaseAdmin = () => {
    if (admin.apps.length === 0) {
        // Let Firebase Admin SDK use default credentials in production
        // or application default credentials locally
        admin.initializeApp();
    }
    return admin;
};
const firebaseAdmin = initializeFirebaseAdmin();
exports.firestore = firebaseAdmin.firestore();
exports.auth = firebaseAdmin.auth();
exports.storage = firebaseAdmin.storage();
exports.Timestamp = firebaseAdmin.firestore.Timestamp;
// Export project ID from environment or default
exports.projectId = process.env.FIREBASE_PROJECT || process.env.GCLOUD_PROJECT || 'intronet-88bc5';
exports.appEnv = process.env.NODE_ENV === 'production' ? 'production' : 'staging';
exports.default = firebaseAdmin;

import * as admin from 'firebase-admin';
declare const firebaseAdmin: typeof admin;
export declare const firestore: admin.firestore.Firestore;
export declare const auth: import("firebase-admin/lib/auth/auth").Auth;
export declare const storage: import("firebase-admin/lib/storage/storage").Storage;
export declare const Timestamp: any;
export declare const projectId: string;
export declare const appEnv: string;
export default firebaseAdmin;

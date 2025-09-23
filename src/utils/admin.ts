import * as admin from 'firebase-admin';

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

export const firestore = firebaseAdmin.firestore();
export const auth = firebaseAdmin.auth();
export const storage = firebaseAdmin.storage();
export const Timestamp = firebaseAdmin.firestore.Timestamp as any;

// Export project ID from environment or default
export const projectId = process.env.FIREBASE_PROJECT || process.env.GCLOUD_PROJECT || 'intronet-88bc5';
export const appEnv = process.env.NODE_ENV === 'production' ? 'production' : 'staging';

export default firebaseAdmin;

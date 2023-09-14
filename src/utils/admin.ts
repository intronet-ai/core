import * as admin from 'firebase-admin';

const isProduction = process.env.NODE_ENV === 'production';

const serviceAccounts = {
  'intronet-88bc5': require('../../admin-service-account.production.json'),
  'intronet-tests': require('../../admin-service-account.staging.json'),
  'intronet-restore': require('../../admin-service-account.restore.json'),
  production: '',
};

serviceAccounts.production = serviceAccounts['intronet-88bc5'];

const project = (process.env.FIREBASE_PROJECT ||
  'intronet-tests') as keyof typeof serviceAccounts;

export const serviceAccount = isProduction
  ? serviceAccounts.production
  : serviceAccounts[project];

export const appEnv = isProduction ? 'production' : 'staging';

export const projectId = serviceAccount.project_id;

admin.initializeApp({
  projectId,
  credential: admin.credential.cert(serviceAccount),
});

export const firestore = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
export const Timestamp = admin.firestore.Timestamp as any;
export default admin;

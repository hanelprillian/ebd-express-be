import * as admin from 'firebase-admin';
import { FIREBASE_PROJECT_ID } from './const';
import serviceAccount from './firebase-service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  projectId: FIREBASE_PROJECT_ID
});

export const db = admin.firestore();
export const auth = admin.auth();
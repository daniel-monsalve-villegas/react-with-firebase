import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzZFVacLu-n7f2a8EuFli27EIPW5vHOO4',
  authDomain: 'proyecto-cf-3995d.firebaseapp.com',
  projectId: 'proyecto-cf-3995d',
  storageBucket: 'proyecto-cf-3995d.appspot.com',
  messagingSenderId: '211886265312',
  appId: '1:211886265312:web:f24ee98e96df3e024dd185',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export default firebaseApp;

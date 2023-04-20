import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
export default firebaseApp;

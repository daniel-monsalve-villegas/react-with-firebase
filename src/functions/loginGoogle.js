import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/credenciales';

export default async function loginGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  } catch (e) {
    console.error(e);
  }
}

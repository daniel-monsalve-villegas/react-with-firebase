import { signOut } from 'firebase/auth';
import { auth } from '../firebase/credenciales';

async function logout() {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
  }
}

export default logout;

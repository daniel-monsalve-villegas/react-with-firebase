import { signOut } from 'firebase/auth';
import { auth } from '../firebase/credenciales';

export async function logout () {
  try {
   await signOut(auth)
  } catch (e) {
    console.error(e)
  }
}

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/credenciales';

export async function loginWithEmailPassword (email, password) {
  try {
    const user = await signInWithEmailAndPassword(email, password)
    console.log(user)
  } catch (e) {
   console.error(e) 
  }
}

import { useState } from 'react';
import Home from './views/Home';
import { Login } from './views/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/credenciales';

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUSer) => {
    if (firebaseUSer) {
      setUser(firebaseUSer);
    } else {
      setUser(null);
    }
  });

  return user ? <Home user={user} /> : <Login />;
}

export default App;

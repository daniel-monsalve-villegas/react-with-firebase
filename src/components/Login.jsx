import { useState } from 'react';
import { registerUser } from '../functions/registerUser';
import { loginWithEmailPassword } from '../functions/loginWithEmailPassword';
import loginGoogle from '../functions/loginGoogle';

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (isLoggedIn) {
      await loginWithEmailPassword(username, password);
    } else {
      await registerUser(username, password);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
          {isLoggedIn ? 'Inicia sesión' : 'Registrate'}
        </h1>

        <form className="flex flex-col" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
          />

          <label htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLoggedIn ? 'Acceder' : 'Registrate'}
          </button>
        </form>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
          onClick={loginGoogle}
        >
          Accede con Google
        </button>

        <button
          className="underline"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn
            ? 'No tienes cuenta? Crea una'
            : '¿Ya tienes cuenta? Accede'}
        </button>
      </div>
    </div>
  );
};

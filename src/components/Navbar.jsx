import logout from '../functions/logout';

function Navbar({ user }) {
  return (
    <div className="w-full flex flex-row justify-between px-10 my-5">
      <p>{user.email}</p>
      <button
        className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;

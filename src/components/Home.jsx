import logout from '../functions/logout'

export const Home = () => {
  return (
  <div>
      Home 
      <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={logout}>Log out</button>
    </div>
  )
}

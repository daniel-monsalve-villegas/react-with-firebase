import Navbar from '../components/Navbar';
import PendingForm from '../components/PendingForm';
import logout from '../functions/logout';

function Home({ user }) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Navbar user={user} />
      <PendingForm />
    </div>
  );
}

export default Home;

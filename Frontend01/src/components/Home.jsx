import { useNavigate } from 'react-router-dom';

function Home({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Welcome Home!</h2>
      <p className="mb-4 text-gray-300">You have successfully logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;


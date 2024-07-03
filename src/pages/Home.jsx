import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Home = ({ user }) => {
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif";
  const backgroundImageURL = "https://wallpapercave.com/wp/DHxNgvZ.jpg";

  return (
    <main
      className="flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src={imageURL}
          alt="Pikachu"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-yellow-500"
        />
        <h1 className="text-5xl font-extrabold text-yellow-500 drop-shadow-lg mb-2">
          Welcome to Pokémon Play
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          {user ? `${user.name}, welcome back!` : "Sign up or log in to start playing."}
        </p>
        <p className="text-xl text-gray-700 mb-6">Enjoy your adventure!</p>

        <div className="flex justify-center gap-4">
          
          {user ?
            <Link
              to="/player-information"
              className="bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Continue
            </Link>
            : <>
              <Link
              to="/create-account"
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-lg shadow-md transition-color300"
            >           
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Login
            </Link>
            </>
            }
        </div>
      </div>
    </main>
  );
};

export default Home;

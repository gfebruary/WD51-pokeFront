import { Link } from "react-router-dom";
import pokemon from "../assets/pokemon.jpg";
import backgroundFoto from "../assets/backgroundFoto.jpg";

const Home = ({ user, appName }) => {
  return (
    <main
      className="grid place-content-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundFoto})` }}
    >
      <div className="flex flex-col items-center m-2 p-8 bg-white/75 rounded-lg shadow-lg ">
        <img
          src={pokemon}
          alt="Pikachu"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-yellow-500"
        />
        <h1 className="text-5xl font-extrabold text-yellow-600 drop-shadow mb-2 text-balance text-center">
          Welcome to {appName}
        </h1>
        <p className="text-xl text-gray-700 mb-2">Enjoy your adventure!</p>
        <p className="text-xl text-gray-700 mb-6">
          {user
            ? `${user.name}, welcome back!`
            : "Sign up or log in to start playing."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {user ? (
            <>
              <Link
                to="/pokedex"
                className="bg-blue-400 hover:bg-blue-500 text-center text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-md transition-all"
              >
                Pick your Pokémon
              </Link>
              <Link
                to="/battle-screen"
                className="bg-blue-400 hover:bg-blue-500 text-center text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-md transition-all"
              >
                Random fight
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/create-account"
                className="bg-green-500 hover:bg-green-400 text-center text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-md transition-all"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="bg-yellow-500 hover:bg-yellow-400 text-center text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-md transition-all"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

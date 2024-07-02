import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Home = () => {
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif";

  const backgroundImageURL = "https://wallpapercave.com/wp/DHxNgvZ.jpg";

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageURL})` }}>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src={imageURL}
          alt="Pikachu"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-yellow-500"
        />
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-2">
          Welcome to Pokémon Play
        </h1>
        <p className="text-xl text-gray-700 mb-6">Enjoy your adventure!</p>
        <div className="flex justify-center space-x-4">
          <Link to="/signin">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Sign In
            </button>
          </Link>
          <Link to="/CreateAccount">
            <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-4 text-white text-sm">
        &copy; 2024 Pokémon Play. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

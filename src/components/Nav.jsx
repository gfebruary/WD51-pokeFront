import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link className="text-white font-bold" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white font-bold" to="/signin">
            Sign In
          </Link>
        </li>
        <li>
          <Link className="text-white font-bold" to="/create-account">
            Create Account
          </Link>
        </li>
        <li>
          <Link className="text-white font-bold" to="/player-information">
            Player Information
          </Link>
        </li>
        <li>
          <Link className="text-white font-bold" to="/pokedex">
            Pokedex
          </Link>
        </li>
        <li>
          <Link className="text-white font-bold" to="/battle-screen">
            Battle Screen
          </Link>
        </li>
        <li>
          <Link className="text-white font-bold" to="/leaderboard">
            Leaderboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

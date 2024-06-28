import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const SignIn = () => {
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/384.gif";

  const backgroundImageURL = "https://wallpapercave.com/wp/wp12122370.jpg"; 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <img src={imageURL} alt="Pokemon" className="mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-blue-500">SIGN IN</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm"
        >
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

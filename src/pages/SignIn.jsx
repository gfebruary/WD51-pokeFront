import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "tailwindcss/tailwind.css";
import { login } from "../utils/logInOut";

const imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif";
const backgroundImageURL = "https://wallpapercave.com/wp/wp12122370.jpg";

const SignIn = ({ srvUrl, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogged = await login(formData, srvUrl, setUser, setLoginError)
    if (isLogged) {
      const from = location.state?.from || { pathname: "/" };
      navigate(from, { replace: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <main
      className="flex flex-col items-center justify-center bg-cover bg-center"
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
              autoComplete="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight bg-white focus:outline focus:outline-offset-2"
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
              autoComplete="current-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight bg-white focus:outline focus:outline-offset-2"
              required
            />
          </div>
          <p className="mb-2 text-red-500 text-xs italic">
            {loginError ? loginError : ' '}
          </p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline focus:outline-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
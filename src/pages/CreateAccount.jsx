import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const SignUp = () => {
 

  const backgroundImageURL = "https://wallpapercave.com/wp/wp12122370.jpg"; 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Registered Successfully");
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center">
        
        <h1 className="text-3xl font-bold mb-4 text-blue-500">SIGN UP</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm"
        >
          {/* First Name */}
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div className="mb-4">
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

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

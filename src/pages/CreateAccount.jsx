import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const lablelStyle = "block text-blue-500 text-sm font-bold mb-2"
const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight bg-white focus:outline focus:outline-offset-2"

const backgroundImageURL = "https://wallpapercave.com/wp/wp12122370.jpg";

const SignUp = ({ srvUrl }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [pswConfirmError, setPswConfirmError] = useState('');
  const [validationError, setValidationError] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleConfirmBlur = () => {
    if (formData.password !== formData.passwordConfirmation) {
      setPswConfirmError('Passwords do not match')
    } else {
      setPswConfirmError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError('');
    if (pswConfirmError !== '') return;
    try {
      const response = await axios.post(`${srvUrl}/fighters`, formData);
      console.log('New fighter:', response.data);
      navigate('/signin');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationError(error.response.data.error || '');
        console.error('Validation error:', error.response);
      } else {
        console.error('Error msg', error.message);
      }
    }
  };

  return (
    <main
      className={`grid place-content-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">SIGN UP</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm"
        >
          {/*  Name */}
          <div className="mb-4">
            <label
              className={lablelStyle}
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              minLength={3}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={inputStyle}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className={lablelStyle}
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className={inputStyle}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className={lablelStyle}
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              minLength={6}
              maxLength={32}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={inputStyle}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-2">
            <label
              className={lablelStyle}
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              minLength={6}
              maxLength={32}
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleConfirmBlur}
              placeholder="Confirm Password"
              className={inputStyle}
              required
            />
          </div>

          <p className="mb-2 text-red-500 text-xs italic">
            {validationError ? validationError : pswConfirmError ? pswConfirmError : ' '}
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline focus:outline-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;


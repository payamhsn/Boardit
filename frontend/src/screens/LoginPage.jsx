import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/auth", { email, password });
      // Store the token in the browser, e.g., localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      // Display an error message to the user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#84DCC6] hover:bg-[#2D9F83] text-white py-2 px-4 rounded-md  w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-[#2D9F83] hover:text-[#165041]">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

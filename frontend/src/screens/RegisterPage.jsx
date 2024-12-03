import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users", {
        name,
        email,
        password,
      });
      // Store the token in the browser, e.g., localStorage
      // localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/login");
    } catch (error) {
      console.error(error);
      // Display an error message to the user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              required
            />
          </div>
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
            className=" text-white py-2 px-4 rounded-md bg-[#84DCC6] hover:bg-[#2D9F83] w-full"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[#2D9F83] hover:text-[#165041]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your App</h1>
      <p className="text-xl mb-4">
        This is a starting point for your MERN stack application. Feel free to
        customize it to fit your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>User authentication</li>
            <li>MongoDB integration</li>
            <li>React frontend with Vite</li>
            <li>Express backend</li>
            <li>Tailwind CSS for styling</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">To get started, you can:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Customize this home page</li>
            <li>Add new routes and components</li>
            <li>Implement your business logic</li>
          </ul>
          <Link
            to="/register"
            className="bg-[#84DCC6] text-white px-4 py-2 rounded hover:bg-[#2D9F83]"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

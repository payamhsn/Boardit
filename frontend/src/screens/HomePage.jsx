import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-[#2D9F83]">
          Welcome to Boardit
        </h1>
        <p className="text-xl text-gray-600">
          Collaborate, Create, and Communicate with our Interactive Whiteboard
          Platform
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
            Key Features
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#84DCC6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Real-time Collaboration
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#84DCC6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Intuitive Drawing Tools
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#84DCC6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Secure User Authentication
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#84DCC6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customizable Whiteboards
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
            How It Works
          </h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Sign up for a free account</li>
            <li>Create a new whiteboard or join an existing one</li>
            <li>Invite collaborators to your whiteboard</li>
            <li>
              Start drawing, brainstorming, and collaborating in real-time
            </li>
          </ol>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
          Ready to Get Started?
        </h2>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-[#84DCC6] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2D9F83] transition duration-300"
          >
            Sign Up Now
          </Link>
          <Link
            to="/login"
            className="bg-white text-[#2D9F83] border-2 border-[#2D9F83] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2D9F83] hover:text-white transition duration-300"
          >
            Log In
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#2D9F83]">
          Why Choose Boardit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-[#84DCC6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p>
              Work together seamlessly, no matter where your team is located.
            </p>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-[#84DCC6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2">Spark Creativity</h3>
            <p>
              Unleash your ideas with our intuitive drawing tools and features.
            </p>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-[#84DCC6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p>Your data is protected with our robust security measures.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

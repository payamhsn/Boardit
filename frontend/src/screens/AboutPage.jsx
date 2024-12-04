import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-[#2D9F83]">
          About Boardit
        </h1>
        <p className="text-xl text-gray-600">
          Empowering teams to collaborate and innovate through interactive
          whiteboards
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          At Boardit, we believe in the power of visual collaboration to drive
          innovation and productivity. Our mission is to provide teams with a
          seamless, intuitive platform that breaks down barriers to creativity
          and enables effortless collaboration, no matter where team members are
          located.
        </p>
        <p className="text-lg text-gray-700">
          We're committed to continually improving our platform, incorporating
          cutting-edge technology and user feedback to ensure Boardit remains at
          the forefront of digital collaboration tools.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Boardit was founded in 2023 by a team of developers and designers
            who recognized the need for a more intuitive, flexible whiteboarding
            solution in the increasingly remote work landscape.
          </p>
          <p className="text-gray-700">
            What started as a simple idea has grown into a powerful platform
            used by teams across the globe to brainstorm, plan, and collaborate
            in real-time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
            Our Values
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
              Innovation: We constantly push the boundaries of what's possible
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
              Collaboration: We believe in the power of teamwork
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
              User-Centric: Our users' needs drive our development
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
              Integrity: We're committed to transparency and ethical practices
            </li>
          </ul>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Boardit is brought to you by a passionate team of developers,
          designers, and product experts dedicated to improving the way teams
          collaborate.
        </p>
        <Link
          to="/team"
          className="bg-[#84DCC6] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2D9F83] transition duration-300"
        >
          Meet the Team
        </Link>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#2D9F83]">
          Join Us on Our Journey
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We're always looking for talented individuals to join our team and
          help shape the future of digital collaboration.
        </p>
        <Link
          to="/careers"
          className="bg-white text-[#2D9F83] border-2 border-[#2D9F83] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2D9F83] hover:text-white transition duration-300"
        >
          View Open Positions
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;

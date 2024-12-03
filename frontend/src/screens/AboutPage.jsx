import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About This Project</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">MERN Starter Template</h2>
        <p className="mb-4">
          This project is a comprehensive MERN (MongoDB, Express, React,
          Node.js) stack starter template. It provides a solid foundation for
          building full-stack web applications with modern technologies and best
          practices.
        </p>
        <p className="mb-4">
          Developed by <span className="font-semibold">Payam Hoseini</span>,
          this template aims to streamline the initial setup process and provide
          a structured starting point for developers working on MERN stack
          projects.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside">
          <li>User authentication and authorization</li>
          <li>MongoDB integration for data persistence</li>
          <li>
            React frontend with Vite for fast development and optimized builds
          </li>
          <li>Express backend with modular architecture</li>
          <li>Tailwind CSS for responsive and customizable styling</li>
          <li>JWT (JSON Web Tokens) for secure authentication</li>
          <li>RESTful API design</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About the Developer</h2>
        <p className="mb-4">
          Payam Hoseini is a passionate full-stack developer with expertise in
          MERN stack technologies. With a keen interest in creating efficient
          and scalable web applications, Payam developed this starter template
          to help other developers kickstart their projects quickly and
          efficiently.
        </p>
        <p>
          For more information or to connect with Payam, please visit:
          {/* Add your preferred contact method or social media links here */}
          <a
            href="https://github.com/payamhsn"
            className="text-blue-500 hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

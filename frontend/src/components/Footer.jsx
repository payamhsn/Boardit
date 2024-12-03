import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4B4E6D] text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Payam Hoseini. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-gray-300 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 mx-2">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 mx-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

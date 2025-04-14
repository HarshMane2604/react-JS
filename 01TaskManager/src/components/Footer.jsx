import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-auto">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Task Manager App</h2>
          <p className="text-sm text-gray-400">
            Manage tasks like a boss. Stay focused, stay productive.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex space-x-6">
          <Link to="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-emerald-400 transition">
            Contact
          </Link>
          <Link to="/explore" className="hover:text-emerald-400 transition">
            Explore
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

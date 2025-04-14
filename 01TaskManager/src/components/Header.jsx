import React from "react";
import { Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent sticky  z-10 ">
      <nav className="flex justify-between items-center mx-auto max-w-screen-xl px-4 py-2 text-lg font-medium backdrop-blur-md bg-white/10 border border-white/20 shadow-lg fixed w-full top-0 z-50 rounded-b-2xl">
        {/* Logo */}
        <Link to="/home">
          <img
            className="h-12 rounded-md"
            src="https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png"
            alt="Logo"
          />
        </Link>

        <div className="flex gap-x-11">
        <NavLink to="/home" 
        className={({isActive}) => `block ${isActive ? "text-emerald-400 ": "text-white"} hover:text-emerald-400`}>
            Home
          </NavLink>
          <NavLink to="/about"
           
          className={({isActive}) => `block ${isActive ? "text-emerald-400 ": "text-white"} hover:text-emerald-400`}>
            About
          </NavLink>
          <NavLink to="/ContactUs" 
          className={({isActive}) => `block ${isActive ? "text-emerald-400 ": "text-white"} hover:text-emerald-400`}>
            Contact us
          </NavLink>
          <NavLink to="/ExploreMore" 
          className={({isActive}) => `block ${isActive ? "text-emerald-400 ": "text-white"} hover:text-emerald-400`}>
            Explore More
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-6">
          <NavLink to="/login" className={({isActive}) => `block ${isActive ? "text-emerald-400 ": "text-white"} hover:text-emerald-400`}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({isActive}) => ` px-4 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-700 ${isActive ? "text-white bg-emerald-600" : "text-white"} transition-colors duration-200 ease-in-out`}
            
          >
            Get started
          </NavLink>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;

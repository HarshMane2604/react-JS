import React from "react";
import todoImage from "../assets/todo.png";
import TypeEffect from "./TypeAnimation/TypeEffect";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-800 rounded-2xl text-white">
        {/* HOME PAGE */}
        <div className=" container mx-auto max-w-7xl px-4 py-12 flex justify-center items-center h-screen gap-2 text-white">
          <img src={todoImage} className="h-[30rem]" alt="Todo illustration" />
          <div className="w-[50%] flex justify-center items-center">
            <div className="bg-white w-1 h-32 ml-5"></div>
            <div className="ml-5">
              <TypeEffect />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center bottom-2">
            <NavLink
            to={"/tasks"}
            className={({ isActive }) =>
                ` inline-block px-6 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-700 ${
                isActive ? "text-white bg-emerald-600" : "text-white"
                } text-xl font-medium transition-colors duration-200 ease-in-out`
            }
            >
            <h1>list your tasks</h1>
            </NavLink>
        </div>

        {/* CARD SECTION */}

        <div className="m-20 grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl">
            <h1 className="font-bold text-xl text-white">📝 Easy Task Input</h1>
            <p className="text-gray-300">
              Quickly add and update tasks with just a few clicks.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl">
            <h1 className="font-bold text-xl text-white">⏱️ Time Management</h1>
            <p className="text-gray-300">
              Set deadlines, priorities, and reminders to stay on track.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-2xl shadow-xl">
            <h1 className="font-bold text-xl text-white">📊 Track Progress</h1>
            <p className="text-gray-300">
              isual feedback to keep your productivity in check.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

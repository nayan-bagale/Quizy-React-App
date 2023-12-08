import React from "react";
import { UserAuth } from "../ContextApi/AuthContext";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const { googleSignIn } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col gap-8 justify-between items-center h-screen">
      <Link
        href="/"
        className=" mt-8 hover:bg-gradient-to-r from-teal-100 to-teal-300 rounded overflow-hidden"
      >
        <img src="/logo1.png" alt="logo" className=" w-[8rem] " />
      </Link>
      <div className="flex flex-col items-center h-fit p-4 rounded-lg bg-slate-800">
        <p className=" md:text-xl w-[30ch] text-white text-justify ">
          Welcome to Quizy, your ticket to a thrilling world of quizzes! Quizy
          offers an exceptional quizzing experience by blending cutting-edge
          features with the robust power of Firebase.
        </p>
        <br />
        <hr className=" w-full" />
        <br />
        <div className=" h-full items-center flex">
          <button
            onClick={handleSignIn}
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
      <Link
        to="https://github.com/nayan-bagale/Quizy-React-App"
        target="_blank"
        className=" text-4xl mb-8 text-white hover:text-stone-400"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default Auth;

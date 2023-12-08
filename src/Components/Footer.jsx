import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-16 w-full gap-2 flex-col h-[5rem] text-white flex justify-center items-center bg-slate-950">
      <Link
        to="/"
        className=" mt-2 hover:bg-gradient-to-r from-teal-100 to-teal-300 rounded overflow-hidden "
      >
        <img src="/logo1.png" alt="logo" className=" w-[5rem] " />
      </Link>

      <div className=" text-sm italic text-gray-500">
        Made by{" "}
        <Link
          className=" hover:text-teal-300"
          to={"https://github.com/nayan-bagale"}
          target="_blank"
        >
          Nayan
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

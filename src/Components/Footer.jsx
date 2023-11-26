import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-16 w-full flex-col h-[5rem] text-white flex justify-center items-center bg-slate-950">
      <h1 className=" text-2xl bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
        Quizy
      </h1>
      <div className=" text-sm italic text-gray-500">Made by Nayan</div>
    </footer>
  );
};

export default Footer;

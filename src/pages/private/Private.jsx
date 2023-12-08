import React, { useState } from "react";
import GetAnsFromUser from "../../Components/Private/GetAnsFromUser";
import GetUserInfo from "../../Components/Private/GetUserInfo";
import { UserData } from "../../ContextApi/PrivateContext";
import LoaderWatch from "../../Components/Loader/Watch";
import NotFound from "../NotFound";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Logo = ({ children }) => {
  return (
    <>
      <div className=" flex items-center justify-between w-full px-8 bg-slate-950">
        <Link
          to="/"
          className=" my-4 hover:bg-gradient-to-r from-teal-100 to-teal-300 rounded overflow-hidden "
        >
          <img src="/logo1.png" alt="logo" className=" w-[5rem] " />
        </Link>
        <Link
          to="https://github.com/nayan-bagale/Quizy-React-App"
          target="_blank"
          className=" text-4xl text-white hover:text-stone-400"
        >
          <FaGithub />
        </Link>
      </div>
      <main className=" text-2xl flex flex-col items-center justify-center gap-4 p-6">
        {children}
      </main>
      <Footer />
    </>
  );
};
const Private = () => {
  const { question } = UserData();

  const [bool, setBool] = useState(false);
  const [error, setError] = useState(true);

  setTimeout(() => {
    setError(false);
  }, 3000);

  return (
    <div className=" h-screen flex flex-col justify-between items-center">
      {/* <main className=" text-2xl flex flex-col items-center justify-center gap-4 p-6"> */}
      {question.length === 0 ? (
        <div className=" flex items-center justify-center h-screen">
          {!error ? <NotFound /> : <LoaderWatch />}
        </div>
      ) : bool ? (
        <Logo>
          <GetAnsFromUser question={question} />
        </Logo>
      ) : (
        <Logo>
          <GetUserInfo setBool={setBool} />
        </Logo>
      )}
      {/* </main> */}
    </div>
  );
};

export default Private;

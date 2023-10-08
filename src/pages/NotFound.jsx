import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // const navigate = useNavigate();
  // setTimeout(() => {
  //   navigate(-1);
  // }, 2000)
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className=" flex flex-col gap-4 items-center justify-center h-screen">
      <div className=" text-3xl text-white ">Not Found 404</div>
      <button
        className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;

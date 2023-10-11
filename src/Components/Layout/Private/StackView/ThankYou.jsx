import React from "react";
import { UserData } from "../../../../ContextApi/PrivateContext";

const ThankYou = () => {
  const { ans } = UserData();
  const arr = Object.keys(ans?.ans);

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className=" text-white flex flex-col items-center justify-center h-[90vh] gap-6">
      <div className=" flex flex-col gap-4 border border-gray-700 p-4 rounded shadow bg-gray-800">
        <h1>
          <span className="text-gray-400">Thank you</span> 🤩 {ans.name}
        </h1>
        <h2 className="text-gray-400">
          Your score is {ans.score} out of {arr.length}.
        </h2>
        <h3 className="text-gray-400">Congrates 🎉 for completing the quiz</h3>
      </div>
      <button
        className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
};

export default ThankYou;

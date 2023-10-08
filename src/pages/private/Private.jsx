import React, { useState, useEffect } from "react";
import GetAnsFromUser from "../../Components/Private/GetAnsFromUser";
import GetUserInfo from "../../Components/Private/GetUserInfo";
import { UserData } from "../../ContextApi/PrivateContext";
import LoaderWatch from "../../Components/Loader/Watch";
import NotFound from "../NotFound";

const Private = () => {
  const { question } = UserData();

  const [bool, setBool] = useState(false);
  const [error, setError] = useState(true);

  setTimeout(() => {
    setError(false);
  }, 3000);

  return (
    <main className=" text-2xl flex flex-col items-center justify-center gap-4 p-6">
      {question.length === 0 ? (
        <div className=" flex items-center justify-center h-screen">
          {!error ? <NotFound /> : <LoaderWatch />}
        </div>
      ) : bool ? (
        <GetAnsFromUser question={question} />
      ) : (
        <GetUserInfo setBool={setBool} />
      )}
    </main>
  );
};

export default Private;

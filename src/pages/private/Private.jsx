import React, { useState, useEffect } from "react";
import GetAnsFromUser from "../../Components/Private/GetAnsFromUser";
import GetUserInfo from "../../Components/Private/GetUserInfo";
import { UserData } from "../../ContextApi/PrivateContext";
import LoaderWatch from "../../Components/Loader/Watch";

const Private = () => {
  const { question } = UserData();

  const [bool, setBool] = useState(false);
  const [error, setError] = useState(true);
  useEffect(() => {
    console.log(question);
  }, [question]);

  setTimeout(() => {
    setError(false);
  }, 5000);

  return (
    <main className=" text-2xl flex flex-col items-center justify-center gap-4 p-6">
      {question.length === 0 ? (
        <div className=" flex items-center justify-center h-screen">
          {!error ? (
            <div className=" text-3xl text-white ">Not Found</div>
          ) : (
            <LoaderWatch />
          )}
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

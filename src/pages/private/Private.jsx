import React, { useState, useEffect } from "react";
import GetAnsFromUser from "../../Components/Private/GetAnsFromUser";
import GetUserInfo from "../../Components/Private/GetUserInfo";
import { UserData } from "../../ContextApi/PrivateContext";

const Private = () => {
  const { question } = UserData();

  const [bool, setBool] = useState(false);

  return (
    <main className=" text-2xl flex flex-col items-center justify-center gap-4 p-6">
      {question.length === 0 ? (
        <div className=" flex items-center justify-center h-screen">
          <div className=" text-3xl text-white ">Not Found</div>
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

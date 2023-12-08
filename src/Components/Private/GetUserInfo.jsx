import React, { useCallback } from "react";
import DynamicForm from "../../Util/DynamicForm";
import { UserData } from "../../ContextApi/PrivateContext";
import { Link } from "react-router-dom";

const GetUserInfo = ({ setBool }) => {
  const { handleUserData, question } = UserData();

  const onSubmit = useCallback((data) => {
    handleUserData(data);
    setBool(() => true);
  });

  return (
    <div className=" flex flex-col items-center justify-between">
      <div className=" flex flex-col gap-4 items-center text-white">
        <h1>Welcome</h1>
        <DynamicForm formData={question[0].form} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default GetUserInfo;

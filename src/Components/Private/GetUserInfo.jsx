import React, { useCallback } from "react";
import DynamicForm from "../../Util/DynamicForm";
import { UserData } from "../../ContextApi/PrivateContext";

const GetUserInfo = ({ setBool }) => {
  const { handleUserData, question } = UserData();

  const onSubmit = useCallback((data) => {
    handleUserData(data);
    setBool(() => true);
  });

  return (
    <div className=" text-white">
      <DynamicForm formData={question[0].form} onSubmit={onSubmit} />
    </div>
  );
};

export default GetUserInfo;

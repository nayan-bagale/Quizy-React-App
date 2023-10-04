import React, { useCallback } from "react";
import DynamicForm from "../../Util/DynamicForm";

const GetUserInfo = ({ setBool }) => {
  const form = [
    {
      name: "name",
      type: "string",
      title: "Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      title: "Email",
      required: true,
    },
    {
      name: "contact",
      type: "tel",
      title: "Contact",
    },
    {
      name: "branch",
      type: "select",
      title: "Branch",
      options: ["CSE", "Civil"],
    },
    {
      name: "age",
      type: "number",
      title: "Age",
    },
    {
      name: "vehicle",
      type: "checkbox",
      title: "I have a bike",
    },
  ];

  const onSubmit = useCallback((data) => {
    console.log(data);
    setBool(() => true);
  });

  return (
    <div className=" text-white">
      <DynamicForm formData={form} onSubmit={onSubmit} />
    </div>
  );
};

export default GetUserInfo;

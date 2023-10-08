import React from "react";
import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";
import { BsArrowRightShort } from "react-icons/bs";

const DynamicForm = ({ formData, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {};
    for (let i = 0; i < formData.length; i++) {
      switch (e.target[i].value) {
        case "on":
          inputData[e.target[i].id] = e.target[i].checked;
          break;
        default:
          inputData[e.target[i].id] = e.target[i].value;
      }
    }

    onSubmit(inputData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-2 w-fit text-xl md:text-2xl "
    >
      {formData.map((item) => {
        switch (item.type) {
          case "select":
            return <FormSelect item={item} />;
            break;
          default:
            return <FormInput item={item} />;
            break;
        }
      })}
      <button
        type="submit"
        className=" my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Next
        <BsArrowRightShort className=" text-2xl" />
      </button>
    </form>
  );
};

export default DynamicForm;

import React from "react";
import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";

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
    <form onSubmit={handleSubmit} className=" flex flex-col gap-2 w-fit ">
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
      <button type="submit" className=" border">Submit</button>
    </form>
  );
};

export default DynamicForm;

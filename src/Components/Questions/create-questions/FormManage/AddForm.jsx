import React, { useEffect } from "react";
import ManageQuestions from "../ManageQuestions";
import { Collapse } from "react-collapse";
import ManageForm from "./ManageForm";
import { AiOutlinePlusSquare } from "react-icons/ai";

const AddForm = ({ formData, setFormData }) => {
  const [bool, setBool] = React.useState(false);

  useEffect(() => {
    setFormData([
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
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {};
    for (let i = 0; i < 3; i++) {
      switch (e.target[i].value) {
        case "on":
          inputData[e.target[i].id] = e.target[i].checked;
          break;
        default:
          inputData[e.target[i].id] = e.target[i].value;
      }
      inputData["name"] = e.target[0].value;
      console.log(e.target[i].value);
    }

    setFormData((prev) => {
      return [...prev, inputData];
    });
    console.log(formData);
  };

  return (
    <div className="gap-2 shadow w-[80vw] md:w-[40vw] flex flex-col items-center md:text-xl text-white border rounded bg-slate-900 border-slate-700 p-2">
      <button onClick={() => setBool(!bool)}>Add Form</button>
      <div className="border-b w-full"></div>
      <Collapse isOpened={bool}>
        <ManageForm formData={formData} setFormData={setFormData} />
        <form
          onSubmit={handleSubmit}
          className=" flex gap-2 flex-col md:flex-row p-4 "
        >
          <div className=" flex gap-2 md:flex-row flex-col ">
            <input
              type="text"
              id="title"
              placeholder="Title"
              required
              className="bg-transparent border rounded px-1 md:max-w-[80%]"
            />
            <select
              name="type"
              id="type"
              className="bg-transparent border rounded px-1 md:max-w-[80%]"
            >
              <option value="string" className=" text-black">
                String
              </option>
              <option value="number" className=" text-black">
                Number
              </option>
            </select>
          </div>
          <div className=" flex gap-2 md:flex-row flex-col justify-between">
            <div className=" flex gap-1 text-md">
              <label htmlFor="required">Required</label>
              <input name="required" id="required" type="checkbox" />
            </div>
            <button type="submit" className="text-2xl self-center ">
              <AiOutlinePlusSquare />
            </button>
          </div>
        </form>
      </Collapse>
    </div>
  );
};

export default AddForm;

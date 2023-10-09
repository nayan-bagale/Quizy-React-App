import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const ManageForm = ({ formData, setFormData }) => {
  const handleDeleteQ = (key) => {
    const updatedQ = formData.filter((item) => {
      return item.title !== key;
    });
    setFormData(updatedQ);
  };

  //   const handleEditQ = (item) => {
  //     console.log("second");
  //   };
  return (
    <div
      className={` flex flex-col gap-2 md:gap-4 w-[80vw] md:w-[40vw] mb-2 ${
        formData.length && ""
      }`}
    >
      <div className="flex text-gray-400 border-gray-400 justify-between mb-2 px-4 border-b mx-2">
        <div className=" flex gap-4 text-left w-full">
          <div className=" flex-1">Title</div>
          <div className=" flex-1">Type</div>
          <div className=" flex-1">Required</div>
        </div>
        <div className=" flex gap-2">Action</div>
      </div>
      <>
        {formData.map((item) => {
          return (
            <div key={item.title} className=" flex justify-between mb-2 px-4">
              <div className="flex gap-4 text-gray-200 text-left w-full">
                <div className=" flex-1">{item.title}</div>
                <div className=" flex-1">{item.type}</div>
                <div className=" flex-1">{item.required ? "yes" : "no"}</div>
              </div>
              <div className="flex gap-2">
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded p-1  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDeleteQ(item.title)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </>
      <div className=" border-b mx-2"></div>
    </div>
  );
};

export default ManageForm;

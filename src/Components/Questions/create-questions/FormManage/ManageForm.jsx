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
      className={` flex flex-col gap-2 mb-2 ${formData.length && "border-b"}`}
    >
      <>
        {formData.map((item) => {
          return (
            <div key={item.title} className=" flex justify-between mb-2">
              <div className="flex gap-4 text-left w-full">
                <div className=" flex-1">{item.title}</div>
                <div className=" flex-1">{item.type}</div>
                <div className=" flex-1">{item.required ? "yes" : "no"}</div>
              </div>
              <div className="flex gap-2">
                {/* <button
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded p-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={() => handleEditQ(item.title)}
                >
                  <FiEdit2 />
                </button> */}
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
    </div>
  );
};

export default ManageForm;

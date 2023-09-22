import React, { useState, useEffect } from "react";
import AddQuestions from "./AddQuestions";
// import { setData } from "@/util/localstorage";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [edit, setEdit] = useState({
    question: "",
    options: [
      { key: 1, value: "" },
      { key: 2, value: "" },
    ],
    ans: "",
  });

  const handleDeleteQ = (key) => {
    const updatedQ = questions.filter((item) => {
      return item.key !== key;
    });
    setQuestions(updatedQ);
  };

  const handleEditQ = (item) => {
    handleDeleteQ(item.key);
    setEdit(item.data);
  };

  return (
    <>
      <>
        {questions.map((item) => {
          return (
            <div
              key={item.key}
              className=" break-words relative flex flex-col gap-2 text-white border rounded border-zinc-700 p-4 bg-zinc-800 w-[80vw] md:w-[40vw]"
            >
              <h1>Q{item.key}.</h1>
              <h1>{item.data.question}</h1>
              <div className=" list-decimal">
                {item.data.options.map((element) => {
                  return <li key={element.key}>{element.value}</li>;
                })}
              </div>
              <p>Ans: {item.data.ans}</p>
              <div className=" absolute -right-5 top-[30%] flex flex-col gap-4 items-end">
                <button
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full p-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={() => handleEditQ(item)}
                >
                  <FiEdit2 />
                </button>
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full p-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDeleteQ(item.key)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </>

      {/* <button
        className=" fixed right-[10rem] p-1 border rounded-full text-3xl text-white hover:text-black hover:bg-white"
      >
        <AiOutlineSave />
      </button> */}

      <AddQuestions setQuestions={setQuestions} edit={edit} />
    </>
  );
};

export default ManageQuestions;

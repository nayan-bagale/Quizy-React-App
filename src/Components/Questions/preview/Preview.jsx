import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"

const Preview = ({ questions, setDialog }) => {

  const handleClose = () => {
    setDialog((prev) => ({...prev, bool:false}))
  }

  console.log(questions.question)
  return (
    <div className=" flex justify-center items-center fixed h-[100%] w-full bg-black/80 z-10 top-0 right-0">
      <div className=" relative flex flex-col items-center p-4 gap-4 text-xl text-white h-fit w-full md:w-[60vw] bg-gray-800 md:rounded-xl">
        <h1 className=" text-2xl">{questions.title}</h1>
        <button className=" absolute right-4 top-4" onClick={handleClose}>
          <AiOutlineClose />
        </button>
        <>
          {questions.question.map((item, i) => {
            return (
              <div
                key={item.key}
                className=" shadow break-words relative flex flex-col gap-2 text-white border rounded border-slate-700 p-4 bg-slate-800 w-[80vw] md:w-[80%]"
              >
                <h1>
                  <span>Q{i + 1}. </span>
                  {item.data.question}
                </h1>
                <div className=" px-2 list-decimal">
                  {item.data.options.map((op) => {
                    return (
                      <li key={op.key} className=" ">
                        {op.value}
                      </li>
                    );
                  })}
                </div>
                <p>Ans: {item.data.ans}</p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Preview;

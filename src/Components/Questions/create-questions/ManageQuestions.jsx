import React, { useState, useEffect } from "react";
import AddQuestions from "./AddQuestions";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { UserAuth } from "../../../ContextApi/AuthContext";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import AddForm from "./FormManage/AddForm";
import { Collapse } from "react-collapse";

const ManageQuestions = ({ setMenu }) => {
  const { user } = UserAuth();

  const [bool, setBool] = React.useState(false);

  const [questions, setQuestions] = useState({
    title: "Quizz",
    question: [],
  });

  const [formData, setFormData] = useState([]);

  const [edit, setEdit] = useState({
    question: "",
    options: [
      { key: 1, value: "" },
      { key: 2, value: "" },
    ],
    ans: "",
  });

  const handleDeleteQ = (key) => {
    const updatedQ = questions.question.filter((item) => {
      return item.key !== key;
    });
    setQuestions((prev) => ({ ...prev, question: updatedQ }));
  };

  const handleEditQ = (item) => {
    handleDeleteQ(item.key);
    setEdit(item.data);
  };

  const handleTitle = (e) => {
    setQuestions((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const userCollectionRef = collection(db, "questions");

  const saveQuestionDB = async () => {
    if (questions.question < 1) {
      toast.error("At least two questions required!");
      return;
    }

    const questionDataDB = {
      uid: user.uid,
      timestamp: Date.now(),
      data: questions,
      qid: uuidv4(),
      form: formData,
    };

    toast.promise(addDoc(userCollectionRef, { ...questionDataDB }), {
      loading: "Saving...",
      success: <b>Questions saved!</b>,
      error: <b>Could not save.</b>,
    });

    setMenu((prev) => !prev);
  };

  return (
    <>
      <AddForm setFormData={setFormData} formData={formData} />
      <div className=" shadow w-[80vw] md:w-[40vw] flex flex-col items-center text-xl text-white border rounded bg-slate-800 border-slate-700 p-2 pb-4">
        <button onClick={() => setBool(!bool)}>Add Questions</button>
        <div className="border-b w-full"></div>
      </div>
      <Collapse isOpened={bool}>
        <div className=" flex gap-1 flex-col">
          <div className=" shadow w-[80vw] md:w-[40vw] flex flex-col items-center text-xl text-white border rounded bg-slate-800 border-slate-700 p-2">
            <label htmlFor="title">Title</label>
            <input
              className=" bg-transparent border rounded px-1 md:max-w-[80%] "
              type="text"
              name="title"
              placeholder=" Title"
              onChange={handleTitle}
            />
          </div>
          <>
            {questions.question.map((item) => {
              return (
                <div
                  key={item.key}
                  className=" shadow break-words relative flex flex-col gap-2 text-white border rounded border-zinc-700 p-4 bg-zinc-800 w-[80vw] md:w-[40vw]"
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

          <AddQuestions
            setQuestions={setQuestions}
            isValid={
              questions.question.length > 0 && questions.title.length > 3
            }
            edit={edit}
            saveQuestionDB={saveQuestionDB}
          />
        </div>
      </Collapse>
      <Toaster />
    </>
  );
};

export default ManageQuestions;

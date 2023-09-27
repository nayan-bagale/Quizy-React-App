import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../../../ContextApi/AuthContext";
import { db } from "../../../firebase/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { RWebShare } from "react-web-share";
import { AiOutlineDelete, AiOutlineShareAlt } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import Preview from "../preview/Preview";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const Previous = () => {
  const { user } = UserAuth();
  const [question, setQuestions] = useState({});

  const bodyref = useRef(null);

  const [Dialog, setDialog] = useState({
    bool: false,
    questions_data: "",
  });

  const userCollectionRef = collection(db, "questions");

  const location = window.location.origin;

  const getData = async () => {
    const data = await getDocs(userCollectionRef);
    setQuestions(
      data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.uid === user.uid)
    );
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if(Dialog.bool) disableBodyScroll(bodyref);
    else enableBodyScroll(bodyref);
  },[Dialog.bool])

  const handleDelete = async (id) => {
    const question = doc(db, "questions", id);
    await deleteDoc(question);
    getData();
    toast.success("Deleted successfully!!!");
  };

  const handleShare = () => {
    toast.success("shared successfully!");
  };

  const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0;
  };

  const handlepreview = (id) => {
    const data = question.filter((item) => item.id === id);
    setDialog((prev) => ({
      ...prev,
      questions_data: data[0].data,
      bool: true,
    }));
  };

  return (
    <div ref={bodyref}>
      {Dialog.bool && (
        <Preview questions={Dialog.questions_data} setDialog={setDialog} />
      )}
      <div className=" flex flex-col gap-4">
        {!isObjectEmpty(question) &&
          question.map((items, k) => {
            return (
              <div
                key={k}
                className="  text-white border rounded border-slate-700 p-4 bg-slate-800 w-[80vw] md:w-[40vw] hover:shadow"
              >
                <div className="break-words relative flex justify-between items-center gap-2">
                  <h1
                    className=" text-xl cursor-pointer"
                    onClick={() => handlepreview(items.id)}
                  >
                    {items.data.title}
                  </h1>
                  <div className=" flex gap-2 items-end">
                    <RWebShare
                      data={{
                        text: "Questions",
                        url: `${location}/form/${items.qid}`,
                        title: "Question",
                      }}
                      onClick={handleShare}
                    >
                      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full p-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <AiOutlineShareAlt />
                      </button>
                    </RWebShare>
                    <button
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full p-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => handleDelete(items.id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
                <div className=" text-sm px-2">
                  <p>
                    <span>Q{1}. </span>
                    {items.data.question[0].data.question}
                  </p>
                  <p>.....</p>
                </div>
              </div>
            );
          })}
      </div>
      <Toaster />
    </div>
  );
};

export default Previous;

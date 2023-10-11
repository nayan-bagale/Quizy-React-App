import React, { useState, useEffect, useRef, useCallback } from "react";
import { UserAuth } from "../../../ContextApi/AuthContext";
import { db } from "../../../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import Preview from "../preview/Preview";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Previous = () => {
  const { question } = UserAuth();

  const bodyref = useRef(null);

  const [Dialog, setDialog] = useState({
    bool: false,
    questions_data: "",
  });

  useEffect(() => {
    if (Dialog.bool) disableBodyScroll(bodyref);
    else enableBodyScroll(bodyref);
  }, [Dialog.bool]);

  const handleDelete = useCallback(async (id) => {
    if (!confirm("Are you sure you want to delete this question?")) return;
    const question = doc(db, "questions", id);
    await deleteDoc(question);
    getData();
    setDialog((prev) => ({ ...prev, bool: false }));
    toast.success("Deleted successfully!!!");
  });

  const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0;
  };

  const handlepreview = (id) => {
    const data = question.filter((item) => item.id === id);
    setDialog((prev) => ({
      ...prev,
      questions_data: data[0],
      bool: true,
    }));
    // console.log(data);
  };

  return (
    <div ref={bodyref}>
      {Dialog.bool && (
        <Preview
          questions={Dialog.questions_data}
          handleDelete={handleDelete}
          setDialog={setDialog}
        />
      )}
      <div className=" flex flex-col gap-4">
        {!isObjectEmpty(question) &&
          question.map((items, k) => {
            return (
              <div
                key={k}
                className="  text-white border rounded cursor-pointer border-slate-700 p-4 bg-slate-800 w-[80vw] md:w-[40vw] hover:shadow"
                onClick={() => handlepreview(items.id)}
              >
                <div className="break-words relative flex justify-between items-center gap-2">
                  <h1 className=" text-xl cursor-pointer">
                    {items.data.title}
                  </h1>
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

import React, { useState, useEffect } from "react";
import { UserAuth } from "../../../ContextApi/AuthContext";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { RWebShare } from "react-web-share";
import { AiOutlineDelete, AiOutlineShareAlt } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const Previous = () => {
  const { user } = UserAuth();
  const [question, setQuestions] = useState([]);

  const userCollectionRef = collection(db, "questions");

  const location = window.location.origin;

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionRef);
      setQuestions(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((doc) => doc.uid === user.uid)
      );
    };
    getData();
  }, []);

  const handleDelete = () => {
    toast.error("Something went wrong!!!");
  }

  const handleShare = () => {
    toast.success("shared successfully!");
  }


  return (
    <div>
      <div className=" flex flex-col gap-4">
        {question &&
          question.map((items,k) => {
            return items.data.map((item, i) => {
              return (
                i === 0 && (
                  <div
                    key={item.data.key}
                    className=" break-words relative flex justify-between items-center gap-2 text-white border rounded border-zinc-700 p-4 bg-zinc-800 w-[80vw] md:w-[40vw]"
                  >
                    <h1>
                      Q{k + 1}. {item.data.question}
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
                        onClick={handleDelete}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                )
              );
            });
          })}
      </div>
      <Toaster/>
    </div>
  );
};

export default Previous;

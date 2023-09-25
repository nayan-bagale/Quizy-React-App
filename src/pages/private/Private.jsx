import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Private = () => {
  let { id } = useParams();
  const [question, setQuestions] = useState([]);

  const userCollectionRef = collection(db, "questions");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionRef);
      setQuestions(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((item) => item.qid === id)
      );
    };
    getData();
  }, []);


  return (
    <main className=" text-2xl flex flex-col items-center justify-center gap-4 p-6">
        {question &&
          question.map((doc) => {
            return doc.data.map((item, i) => {
              return (
                <div key={item.key} className=" text-white w-[60vw] md:w-[40vw] p-6 border bg-zinc-800/90 rounded-lg flex flex-col gap-4">
                  <div>
                    <span>Q{i + 1}) </span>
                    {item.data.question}
                  </div>
                  <div className=" flex flex-col gap-2">
                    {item.data.options.map((option) => {
                      return (
                        <li
                          key={option.key}
                          className=" list-decimal p-1 rounded hover:bg-zinc-900 "
                        >
                          {option.value}
                        </li>
                      );
                    })}
                  </div>
                </div>
              );
            });
          })}
    </main>
  );
};

export default Private;

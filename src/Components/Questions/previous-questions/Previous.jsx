import React, { useState, useEffect } from "react";
import { UserAuth } from "../../../ContextApi/AuthContext";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { RWebShare } from "react-web-share";
import { useLocation } from "react-router-dom";

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


  return (
    <div>
      <div>
        {question &&
          question.map((items) => {
            return items.data.map((item) => {
              return (
                <div key={item.data.key}>
                  {item.data.question}
                  <RWebShare
                    data={{
                      text: "Questions",
                      url: `${location}/form/${items.qid}`,
                      title: "Flamingos",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button>Share 🔗</button>
                  </RWebShare>
                </div>
              );
            });
          })}
      </div>
      {/* <div className=" flex flex-col text-2xl text-white">
        <div>Question Share 🔗</div>
        <div>Question Share 🔗</div>
      </div> */}
    </div>
  );
};

export default Previous;

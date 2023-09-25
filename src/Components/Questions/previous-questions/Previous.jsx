import React, { useState, useEffect } from "react";
import { UserAuth } from "../../../ContextApi/AuthContext";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Previous = () => {
  const { user } = UserAuth();
  const [question, setQuestions] = useState([]);

  const userCollectionRef = collection(db, "questions");

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
            return (items.data.map((item) => {
              return <li key={item.data.key}>{item.data.question}</li>;
            }));
          })}
      </div>
    </div>
  );
};

export default Previous;

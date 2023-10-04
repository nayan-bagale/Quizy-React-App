import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import GetAnsFromUser from "../../Components/Private/GetAnsFromUser";
import GetUserInfo from "../../Components/Private/GetUserInfo";

const Private = () => {
  let { id } = useParams();
  const [question, setQuestions] = useState([]);
  const [bool, setBool] = useState(false);

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
      {question.length === 0 ? (
        <div className=" flex items-center justify-center h-screen">
          <div className=" text-3xl text-white ">Not Found</div>
        </div>
      ) : 
      bool ? 
      <GetAnsFromUser question={question} /> 
      : <GetUserInfo setBool={setBool}/>
      }
    </main>
  );
};

export default Private;

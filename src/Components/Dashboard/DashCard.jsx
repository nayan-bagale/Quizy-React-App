import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { UserAuth } from "../../ContextApi/AuthContext";

const DashCard = () => {
  const { user } = UserAuth();
  const [quesAttemted, setQuesAttempted] = useState([]);

  const attemptedCollectionRef = collection(db, "attempted");
  const getData = async () => {
    const attempteddata = await getDocs(attemptedCollectionRef);
    setQuesAttempted(
      attempteddata.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.uid === user.uid)
    );
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(quesAttemted);
  }, [quesAttemted]);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {quesAttemted.map((item) => {
        return (
          <div
            key={item.id}
            className=" shadow border-gray-800 bg-gray-800 flex flex-col border p-4 rounded-xl gap-1"
          >
            <h1 className="text-gray-200">{item.name}</h1>
            <h2 className=" text-gray-400 text-xl">{item.email}</h2>
            <h3 className="text-gray-200 text-2xl">Score: {item.score}</h3>
            <p className="text-gray-500 text-lg">Title: {item.qtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DashCard;

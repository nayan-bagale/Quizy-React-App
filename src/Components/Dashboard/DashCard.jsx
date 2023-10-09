import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { UserAuth } from "../../ContextApi/AuthContext";

const DashCard = () => {
  const { user } = UserAuth();
  const [quesAttemted, setQuesAttempted] = useState([]);

  const attemptedCollectionRef = collection(db, "attempted");

  const getData = useCallback(async () => {
    const attempteddata = await getDocs(attemptedCollectionRef);
    const allData = attempteddata.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((doc) => doc.uid === user.uid);

    setQuesAttempted(allData);
  });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(quesAttemted);
  }, [quesAttemted]);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center ">
      {quesAttemted.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[19rem] shadow-md border-gray-700 bg-gray-800 flex flex-col border p-4 rounded-xl gap-1"
          >
            <h1 className="text-gray-200 text-xl">{item.name}</h1>
            <h2 className=" text-gray-400 text-base">{item.email}</h2>
            <h3 className="text-gray-200 text-xl">Score: {item.score}</h3>
            <p className="text-gray-500 text-base">Title: {item.qtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DashCard;

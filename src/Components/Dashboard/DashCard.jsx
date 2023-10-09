import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { UserAuth } from "../../ContextApi/AuthContext";
import DashCardPreview from "./DashCardPreview";

const DashCard = ({ quesAttemted }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userdata, setUserdata] = useState({});

  const handleClick = (index) => {
    setIsDialogOpen(true);
    const { id, uid, qid, ...data } = quesAttemted[index];
    console.log(data);
    setUserdata({ ...data });
  };

  useEffect(() => {
    console.log(quesAttemted);
  }, [quesAttemted]);

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center ">
        {quesAttemted.map((item, index) => {
          return (
            <div
              key={item.id}
              className="w-[19rem] shadow-md border-slate-700 bg-slate-800 flex flex-col border p-4 rounded-xl gap-1"
              onClick={() => handleClick(index)}
            >
              <h1 className="text-gray-200 text-xl">{item.name}</h1>
              <h2 className=" text-gray-400 text-base">{item.email}</h2>
              <h3 className="text-gray-200 text-xl">Score: {item.score}</h3>
              <p className="text-gray-500 text-base">Title: {item.qtitle}</p>
            </div>
          );
        })}
      </div>
      {isDialogOpen && (
        <DashCardPreview
          userdata={userdata}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </>
  );
};

export default DashCard;

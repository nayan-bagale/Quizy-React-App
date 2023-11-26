import React, { useEffect, useState } from "react";
import DashCardPreview from "./DashCardPreview";
import toast from "react-hot-toast";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const DashCard = ({ quesAttemted, fetchQuestionAttempted }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userdata, setUserdata] = useState({});

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this question?")) return;
    const question = doc(db, "attempted", id);
    await deleteDoc(question);
    fetchQuestionAttempted();
    setIsDialogOpen(false);
    toast.success("failed to delete");
  };

  const handleClick = (index) => {
    setIsDialogOpen(true);
    const { uid, qid, ...data } = quesAttemted[index];
    // console.log(data);
    setUserdata({ ...data });
  };

  // useEffect(() => {
  //   console.log(quesAttemted);
  // }, [quesAttemted]);

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
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default DashCard;

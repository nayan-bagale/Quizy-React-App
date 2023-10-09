import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { UserAuth } from "../ContextApi/AuthContext";

import DashCard from "../Components/Dashboard/DashCard";
import TopScore from "../Components/Dashboard/Top/TopScore";

const Dashboard = () => {
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
    <main className=" flex flex-col gap-4 my-4 w-full min-h-[80vh] text-white text-3xl">
      <TopScore quesAttemted={quesAttemted} />
    </main>
  );
};

export default Dashboard;

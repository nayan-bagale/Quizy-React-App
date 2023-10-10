import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, messaging } from "../firebase/firebase";
import { UserAuth } from "../ContextApi/AuthContext";

import DashCard from "../Components/Dashboard/DashCard";
import TopScore from "../Components/Dashboard/Top/TopScore";
import { Toaster } from "react-hot-toast";
import { getToken } from "firebase/messaging";

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

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BNPBwXShn97YkyX0ihyU-NbaHoqfyrrQOIpiyO-KVeIcYc_VEIs4UhFl43ignjO3goTfxg_FJWC5B46SrZ6LtUQ",
      });
      console.log(token);
      console.log("Notification permission granted.");
    } else {
      alert("Notification permission denied.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <main className=" flex flex-col gap-4 my-4 w-full min-h-[80vh] text-white text-3xl">
      <TopScore quesAttemted={quesAttemted} />
      <div className=" text-base md:text-xl">
        <Toaster />
      </div>
    </main>
  );
};

export default Dashboard;

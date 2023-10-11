import React, { useEffect } from "react";
import { UserAuth } from "../ContextApi/AuthContext";

import TopScore from "../Components/Dashboard/Top/TopScore";
import { Toaster } from "react-hot-toast";
import DashCard from "../Components/Dashboard/DashCard";

const Dashboard = () => {
  const { quesAttemted } = UserAuth();

  return (
    <main className=" flex flex-col gap-4 my-4 w-full min-h-[80vh] text-white text-3xl">
      {/* <TopScore quesAttemted={quesAttemted} /> */}
      <DashCard quesAttemted={quesAttemted} />
      <div className=" text-base md:text-xl">
        <Toaster />
      </div>
    </main>
  );
};

export default Dashboard;

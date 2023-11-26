import React, { useEffect, useState } from "react";
import { UserAuth } from "../ContextApi/AuthContext";

import TopScore from "../Components/Dashboard/Top/TopScore";
import { Toaster } from "react-hot-toast";
import DashCard from "../Components/Dashboard/DashCard";
import Search from "../Components/Dashboard/SearchQ/Search";

const Dashboard = () => {
  const { quesAttemted, fetchQuestionAttempted } = UserAuth();
  const [questionsDisplay, setQuestionsDisplay] = useState(quesAttemted);

  return (
    <main className=" flex flex-col gap-4 my-4 w-full min-h-[80vh] text-white text-3xl">
      {/* <TopScore quesAttemted={quesAttemted} /> */}
      <Search
        setQuestionsDisplay={setQuestionsDisplay}
        quesAttemted={quesAttemted}
      />
      <DashCard
        quesAttemted={questionsDisplay}
        fetchQuestionAttempted={fetchQuestionAttempted}
      />
      <div className=" text-base md:text-xl">
        <Toaster />
      </div>
    </main>
  );
};

export default Dashboard;

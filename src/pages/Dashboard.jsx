import { useCallback, useEffect, useState } from "react";
import { UserAuth } from "../ContextApi/AuthContext";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const Dashboard = () => {
  const { user } = UserAuth();


  return (
    <main className=" flex flex-col items-center gap-4 justify-center text-white text-3xl">
      <div className=" flex flex-col gap-2">
      Dashborad
      </div>
    </main>
  );
};

export default Dashboard;

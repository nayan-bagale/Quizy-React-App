import { UserAuth } from "../ContextApi/AuthContext";

import DashCard from "../Components/Dashboard/DashCard";

const Dashboard = () => {
  return (
    <main className=" flex flex-col gap-4 my-4 w-full min-h-[80vh] text-white text-3xl">
      <DashCard />
    </main>
  );
};

export default Dashboard;

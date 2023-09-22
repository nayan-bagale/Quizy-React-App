import Navbar from "../Components/Navbar";
import { UserAuth } from "../ContextApi/AuthContext";


const Dashboard = () => {
  const { user } = UserAuth();

  return (
    <>
      <main>{user}</main>
    </>
  );
};

export default Dashboard;

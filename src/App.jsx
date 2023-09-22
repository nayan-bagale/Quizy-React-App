import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import { useState } from "react";
import { UserAuth } from "./ContextApi/AuthContext";
import { Route, Routes } from "react-router-dom";

const MainApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
};

const PrivatePage = () => {
  
}

function App() {
  const { user } = UserAuth();

  return <>{!user ? <Auth /> : <MainApp />}</>;
}

export default App;

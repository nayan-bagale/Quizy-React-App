import React from "react";
import { UserAuth } from "../ContextApi/AuthContext";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Collapse } from "react-collapse";
import BasicInfo from "../Components/Profile/BasicInfo";

const Profile = () => {
  const { user, logOut } = UserAuth();

  const handleLogOut = () => {
    const $ = confirm("Are you sure 🥹");
    if ($) logOut();
  };

  return (
    <div className=" flex flex-col items-center justify-between min-h-screen">
      <main className=" flex-1 flex flex-col w-full text-white">
        <section className=" flex bg-gradient-to-r from-slate-900 to-slate-700 w-full py-8 md:py-0 md:h-[20rem] justify-center md:justify-start items-center">
          <div className=" w-[60%] md:-mt-[5rem] flex flex-col md:flex-row justify-center gap-4 md:gap-24 items-center ">
            <div className=" border-[2px] rounded-xl overflow-hidden w-fit">
              <img
                src={user.photoURL}
                className=" w-24 md:w-28"
                width={100}
                height={100}
                alt="profile"
              />
            </div>
            <h1 className=" text-xl md:text-2xl">{user.displayName}</h1>
          </div>
        </section>
        <section className=" flex justify-center flex-col md:flex-row md:gap-4 w-full">
          <section className=" flex flex-col md:p-4 md:h-[30rem] md:w-[20rem] gap-4 ">
            <div className=" flex items-center gap-2 p-4 md:p-6 md:rounded-lg cursor-pointer bg-slate-700">
              <span className=" md:hidden">
                <IoIosArrowForward />
              </span>{" "}
              Basic Info
            </div>
            <div
              className="md:flex hidden p-6 px-4 items-center rounded-lg gap-2 hover:shadow hover:bg-red-600 cursor-pointer "
              onClick={handleLogOut}
            >
              <FiLogOut />
              <span>SignOut</span>
            </div>
          </section>
          <Collapse isOpened={true}>
            <BasicInfo user={user} />
          </Collapse>
          <div
            className="flex p-2 px-4 items-center gap-2 hover:shadow hover:bg-red-600 md:hidden cursor-pointer "
            onClick={handleLogOut}
          >
            <FiLogOut />
            <span>SignOut</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;

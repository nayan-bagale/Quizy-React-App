import React from 'react'
import { UserAuth } from '../ContextApi/AuthContext';
import {IoIosArrowForward} from "react-icons/io"

const Profile = () => {
  const {user} = UserAuth();
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
             <span className=' md:hidden'><IoIosArrowForward/></span>  Basic Info
            </div>
            <div className=" p-6 hidden md:block md:rounded-lg cursor-pointer ">.....</div>
          </section>
          <section className=" md:-mt-[4rem] md:hover:shadow-2xl shadow md:rounded-xl p-4 h-[20rem] md:h-[30rem] md:w-[30rem] bg-slate-800 md:border border-slate-700 transition-all duration-200 ">
            <h1 className=" text-sm md:text-lg font-semibold">Basic Info</h1>
            <div className=" flex justify-between gap-6 border-b p-2 mt-2">
              <div className=' text-sm md:text-base'>Name</div>
              <div className=" flex-1 text-md md:text-base">{user.displayName}</div>
              <div></div>
            </div>
            <div className=" flex justify-between gap-6 border-b p-2 mt-2">
              <div className=' text-sm md:text-base'>Email</div>
              <div className=" flex-1 text-md md:text-base">{user.email}</div>
              <div></div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Profile
import React from 'react'
import { UserAuth } from '../ContextApi/AuthContext';

const Profile = () => {
  const {user} = UserAuth();
  return (
    <div className=" flex flex-col items-center justify-between min-h-screen">
      <main className=" flex-1 flex flex-col w-full text-white">
        <section className=" flex bg-gradient-to-r from-slate-900 to-slate-700 w-full h-[20rem] gap-24 items-center">
          <div className=" w-[60%] -mt-[5rem] flex justify-center gap-24 items-center ">
            <div className=" border-[2px] rounded-xl overflow-hidden w-fit">
              <img
                src={user.photoURL}
                className=" w-28"
                width={100}
                height={100}
                alt="profile"
              />
            </div>
            <h1 className=" text-2xl">{user.displayName}</h1>
          </div>
        </section>
        <section className=" flex justify-center gap-4 w-full">
          <section className=" flex flex-col p-4 h-[30rem] w-[20rem] gap-4 ">
            <div className=" p-6 rounded-lg cursor-pointer bg-slate-700">
              Basic Info
            </div>
            <div className=" p-6 rounded-lg cursor-pointer ">.....</div>
          </section>
          <section className=" -mt-[4rem] hover:shadow-2xl shadow rounded-xl p-4 h-[30rem] w-[30rem] bg-slate-800 border border-slate-700 transition-all duration-200 ">
            <h1 className=" text-lg font-semibold">Basic Info</h1>
            <div className=" flex justify-between gap-6 border-b p-2 mt-2">
              <div>Name</div>
              <div className=" flex-1">{user.displayName}</div>
              <div></div>
            </div>
            <div className=" flex justify-between gap-6 border-b p-2 mt-2">
              <div>Email</div>
              <div className=" flex-1">{user.email}</div>
              <div></div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Profile
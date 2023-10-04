import React from 'react'

const BasicInfo = ({user}) => {
  return (
    <>
      <section className=" md:-mt-[4rem] md:hover:shadow-2xl shadow md:rounded-xl p-4 h-[20rem] md:h-[30rem] md:w-[30rem] bg-slate-800 md:border border-slate-700 transition-all duration-200 ">
        <h1 className=" text-sm md:text-lg font-semibold">Basic Info</h1>
        <div className=" flex justify-between gap-6 border-b p-2 mt-2">
          <div className=" text-sm md:text-base">Name</div>
          <div className=" flex-1 text-md md:text-base">{user.displayName}</div>
          <div></div>
        </div>
        <div className=" flex justify-between gap-6 border-b p-2 mt-2">
          <div className=" text-sm md:text-base">Email</div>
          <div className=" flex-1 text-md md:text-base">{user.email}</div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default BasicInfo
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ManageQuestions from "../Components/Questions/create-questions/ManageQuestions";
import Previous from "../Components/Questions/previous-questions/Previous"
import { useState } from "react";
import { AiOutlineSave, AiOutlineShareAlt } from "react-icons/ai";

const Questions = () => {
  const [Menu, setMenu] = useState(true);

  return (
    <div className=" flex flex-col justify-between min-h-screen">
      <main className="flex flex-col items-center justify-center md:my-4 ">
        <div className="flex flex-col items-center relative gap-4 h-full w-full md:w-[60vw] ">
          <nav className=" z-10 top-0 sticky w-full py-2 bg-gray-700 md:rounded-xl flex md:text-2xl md:py-3 list-none text-white items-center justify-center ">
            <div className=" flex gap-8 md:border-b px-8 py-2">
              <button className=" cursor-pointer" onClick={() => setMenu(true)}>
                Create Questions
              </button>
              <button
                className=" cursor-pointer"
                onClick={() => setMenu(false)}
              >
                Previous Questions
              </button>
            </div>
            <div className="absolute right-4 gap-4 hidden md:flex">
              {/* { Menu && (<button className="  p-1 border rounded-full text-3xl hover:text-black hover:bg-white">
                <AiOutlineSave />
              </button>)} */}
              {/* <button className="  p-1 border rounded-full text-3xl hover:text-black hover:bg-white">
                <AiOutlineShareAlt />
              </button> */}
            </div>
          </nav>
          <div className=" flex flex-col w-full gap-4 md:rounded-xl justify-center p-8 items-center">
            {Menu ? <ManageQuestions /> : <Previous />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questions;

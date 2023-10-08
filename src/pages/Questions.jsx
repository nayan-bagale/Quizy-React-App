import ManageQuestions from "../Components/Questions/create-questions/ManageQuestions";
import Previous from "../Components/Questions/previous-questions/Previous";
import { useState } from "react";

const Questions = () => {
  const [Menu, setMenu] = useState(false);

  return (
    <div className=" flex flex-col justify-between min-h-screen">
      <main className="flex flex-col items-center justify-center md:my-4 ">
        <div className="flex flex-col items-center gap-4 h-full w-full md:w-[60vw] ">
          <nav className=" w-full py-2 flex text-b md:text-2xl md:py-3 list-none text-white items-center justify-center ">
            <div className=" flex border-b gap-2">
              <button
                className={` cursor-pointer rounded-t-xl hover:bg-gray-700 px-4 p-1 ${
                  Menu ? "bg-gray-800" : ""
                }`}
                onClick={() => setMenu(true)}
              >
                Create Questions
              </button>
              <button
                className={` cursor-pointer rounded-t-xl hover:bg-gray-700 px-4 p-1 ${
                  !Menu ? "bg-gray-800" : ""
                }`}
                onClick={() => setMenu(false)}
              >
                Previous Questions
              </button>
            </div>
          </nav>
          <div className=" flex flex-col w-full gap-4 bg-gray-800 md:rounded-xl justify-center p-8 items-center">
            {!Menu ? <Previous /> : <ManageQuestions />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questions;

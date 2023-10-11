import { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineShareAlt,
} from "react-icons/ai";
import {
  MdOutlineNotificationsActive,
  MdOutlineNotificationsOff,
} from "react-icons/md";
import { RWebShare } from "react-web-share";
import { UserAuth } from "../../../ContextApi/AuthContext";

const Preview = ({ questions, setDialog, handleDelete }) => {
  const ref = useRef(null);
  const location = window.location.origin;

  const { requestPermission, notification } = UserAuth();

  const [isNotified, setIsNotified] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClose = () => {
    setDialog((prev) => ({ ...prev, bool: false }));
  };

  const handleNotify = async () => {
    const token = await requestPermission();
    if (token) {
      setIsNotified(!isNotified);
      notification(questions.qid, token, !isNotified);

      if (!isNotified) {
        toast.success("Notification On.");
      } else {
        toast.success("Notification Off.");
      }
    } else {
      setIsDisabled(true);
      toast.error("Notification permission denied.");
    }
  };

  const handleShare = () => {
    toast.success("shared successfully!");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className=" flex justify-center items-center fixed h-screen w-full bg-black/80 z-10 top-0 right-0">
      <div
        ref={ref}
        className=" relative flex flex-col h-[80%] justify-evenly items-center p-4 gap-4 text-xl text-white w-full md:w-[40vw] bg-gray-800 md:rounded-xl"
      >
        <div className=" flex flex-col gap-2">
          <h1 className=" text-2xl">{questions.data.title}</h1>
          <p>{questions.data.description || ""}</p>
        </div>
        <button className=" absolute right-4 top-4" onClick={handleClose}>
          <AiOutlineClose />
        </button>
        <div className=" flex flex-col w-full items-center py-4 gap-4 overflow-y-auto border-y border-slate-700">
          {questions.data.question.map((item, i) => {
            return (
              <div
                key={item.key}
                className=" break-words relative flex flex-col gap-2 text-white border rounded border-slate-700 p-4 bg-slate-700 w-[80vw] md:w-[80%]"
              >
                <h1>
                  <span>Q{i + 1}. </span>
                  {item.data.question}
                </h1>
                <div className=" px-2 list-decimal">
                  {item.data.options.map((op) => {
                    return (
                      <li key={op.key} className=" ">
                        {op.value}
                      </li>
                    );
                  })}
                </div>
                <p>Ans: {item.data.ans}</p>
              </div>
            );
          })}
        </div>
        <div className=" flex gap-2 w-full justify-evenly items-center">
          <button
            onClick={handleNotify}
            disabled={isDisabled}
            className={`focus:outline-none text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-6 md:px-12 py-2.5 dark:focus:ring-purple-900 
            ${
              isDisabled
                ? "cursor-not-allowed bg-purple-800/50 "
                : "hover:bg-purple-800 bg-purple-700"
            }`}
          >
            {isNotified ? (
              <MdOutlineNotificationsActive />
            ) : (
              <MdOutlineNotificationsOff />
            )}
          </button>
          <RWebShare
            data={{
              text: questions.data.title,
              url: `${location}/form/${questions.qid}`,
              title: questions.data.title,
            }}
            onClick={handleShare}
          >
            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-xl p-2.5 px-6 md:px-12 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              <AiOutlineShareAlt />
            </button>
          </RWebShare>

          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl p-2.5 px-6 md:px-12 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => handleDelete(questions.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;

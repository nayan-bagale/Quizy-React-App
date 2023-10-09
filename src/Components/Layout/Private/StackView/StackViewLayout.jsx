import { useCallback, useState, useEffect } from "react";
import Card from "./Card";
import { UserData } from "../../../../ContextApi/PrivateContext";
import ThankYou from "./ThankYou";
import toast, { Toaster } from "react-hot-toast";

const StackViewLayout = ({ question }) => {
  const [ans, setAns] = useState({});
  const { handleAnswer, user } = UserData();

  const [bool, setBool] = useState(false);

  const currentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (Object.keys(ans).length !== question[0].data.question.length) {
      toast.error("Please answer all questions");
      return;
    }
    handleAnswer({ ...user, ans: { ...ans }, timestamp: currentDate() });
    setBool(() => true);
  });

  return !bool ? (
    <div className="text-white flex flex-col gap-4">
      <h1 className=" md:text-3xl self-center ">{user.name}</h1>
      <h1 className=" md:text-2xl ">{question[0].data.title}</h1>
      <p className=" text-base md:text-xl text-slate-400">
        {question[0].data?.description || ""}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        {question[0].data.question.map((item, i) => {
          return <Card item={item} i={i} setAns={setAns} ans={ans} />;
        })}
        <button
          type="submit"
          className={` shadow w-[60vw] md:w-full rounded-md text-center hover:bg-green-800 text-white py-1 bg-green-700 ${
            Object.keys(ans).length !== question[0].data.question.length
              ? "cursor-not-allowed bg-green-800"
              : "cursor-pointer"
          } `}
        >
          Submit
        </button>
      </form>
      <div className=" text-base md:text-xl">
        <Toaster />
      </div>
    </div>
  ) : (
    <ThankYou />
  );
};

export default StackViewLayout;

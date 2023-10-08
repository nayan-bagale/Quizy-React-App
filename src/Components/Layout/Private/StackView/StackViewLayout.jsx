import { useCallback, useState } from "react";
import Card from "./Card";
import { UserData } from "../../../../ContextApi/PrivateContext";
import ThankYou from "./ThankYou";

const StackViewLayout = ({ question }) => {
  const [ans, setAns] = useState({});
  const { handleAnswer, user } = UserData();

  const [bool, setBool] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    handleAnswer({ ...user, ans: { ...ans } });
    setBool(() => true);
  });

  return !bool ? (
    <div className="text-white flex flex-col gap-4">
      <h1 className=" md:text-3xl self-center ">{user.name}</h1>
      <h1 className=" md:text-2xl ">{question[0].data.title}</h1>
      <p>{question[0].data?.des || ""}</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        {question[0].data.question.map((item, i) => {
          return <Card item={item} i={i} setAns={setAns} ans={ans} />;
        })}
        <button
          type="submit"
          className={` shadow w-[60vw] md:w-full rounded-md text-center hover:bg-green-800 text-white py-1 bg-green-700 `}
        >
          Submit
        </button>
      </form>
    </div>
  ) : (
    <ThankYou />
  );
};

export default StackViewLayout;

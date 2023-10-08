import { useState } from "react";
import Card from "./Card";
import { UserData } from "../../../../ContextApi/PrivateContext";

const StackViewLayout = ({ question }) => {
  const [ans, setAns] = useState({});
  const { handleAnswer, user } = UserData();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer({ ...user, ans: { ...ans } });
  };

  return (
    <div className="text-white">
      <h1 className=" md:text-3xl ">{user.name}</h1>
      <h1 className=" md:text-2xl ">{question[0].data.title}</h1>
      <p>{question[0].data?.des || "Not Available"}</p>
      <form onSubmit={handleSubmit}>
        {question[0].data.question.map((item, i) => {
          return <Card item={item} i={i} setAns={setAns} ans={ans} />;
        })}
        <button
          type="submit"
          className={` shadow w-[80vw] md:w-[40vw] rounded-md text-center hover:bg-green-800 text-white p-2 bg-green-700 `}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StackViewLayout;

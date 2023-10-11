import { useEffect, useState } from "react";
import DashCard from "../DashCard";

const TopScore = ({ quesAttemted }) => {
  // const [topScore, setTopScore] = useState([]);
  // useEffect(() => {
  //   // create new object array from quesAttemted array
  //   const newObjectArray = quesAttemted.reduce((acc, item) => {
  //     // Check if the email already exists in the accumulator array
  //     const existingItem = acc.find((obj) => obj.email === item.email);

  //     // If the email doesn't exist, add the current item to the accumulator array
  //     if (!existingItem) {
  //       acc.push({
  //         ...item,
  //       });
  //     }

  //     return acc;
  //   }, []);

  //   setTopScore(newObjectArray);

  //   // setTopScore(temp);
  // }, [quesAttemted]);

  return (
    <div className="flex flex-col gap-4">
      <div className=" border-b mx-4 md:mx-20 text-2xl italic text-slate-200 border-slate-200">
        Top Score:
      </div>
      <DashCard quesAttemted={quesAttemted} />
    </div>
  );
};

export default TopScore;

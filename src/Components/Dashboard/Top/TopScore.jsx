import { useEffect, useState } from "react";
import DashCard from "../DashCard";

const TopScore = ({ quesAttemted }) => {
  //   const [topScore, setTopScore] = useState([]);
  //   useEffect(() => {
  //     let temp = [];
  //     let high = quesAttemted[0].score;
  //     for (let i = 1; i < quesAttemted.length; i++) {
  //       if (quesAttemted[i].score > high) {
  //         high = quesAttemted[i].score;
  //         temp.push(quesAttemted[i]);
  //       }
  //       console.log(quesAttemted[i]);
  //     }
  //   }, [quesAttemted.length]);

  return (
    <div className="flex flex-col gap-4">
      {/* <div className=" border-b mx-4 md:mx-20 text-2xl italic text-slate-200 border-slate-200">
        Top Score:
      </div> */}
      <DashCard quesAttemted={quesAttemted} />
    </div>
  );
};

export default TopScore;

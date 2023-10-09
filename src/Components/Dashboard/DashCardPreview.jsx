import { useState } from "react";
import DialogBackgrond from "../Layout/Dialog/DialogBackgrond";
import { Collapse } from "react-collapse";

const DashCardPreview = ({ setIsDialogOpen, userdata }) => {
  const keys = Object.keys(userdata.ans);
  const [bool, setBool] = useState(false);
  return (
    <DialogBackgrond setIsDialogOpen={setIsDialogOpen}>
      <div className=" flex flex-col gap-4">
        <h1 className=" text-2xl self-center">{userdata.name}</h1>
        <div className="text-base md:text-xl">
          <div>{userdata.email}</div>
          {userdata.Age && <div>Age: {userdata.Age}</div>}
          {userdata.Phone && <div>Phone: {userdata.Phone}</div>}
        </div>
        <div className=" flex flex-col gap-2 bg-slate-900 p-4 border-slate-800 border rounded-md shadow">
          <div className="text-xl md:text-xl">{userdata.qtitle}</div>
          <div className="text-base md:text-xl text-slate-400">
            {userdata.description && <div>Des: {userdata.description}</div>}
            <div className="">Score: {userdata.score}</div>
            {userdata.timestamp && <div>Date: {userdata.timestamp}</div>}
          </div>
          <button
            className=" rounded-md w-full text-center text-base md:text-xl"
            onClick={() => setBool(!bool)}
          >
            Answers Selected <span>{!bool ? "▼" : "▲"}</span>
          </button>
          <div className=" border-b"></div>
          <Collapse isOpened={bool}>
            <div className=" ml-2 flex flex-col gap-2 text-base md:text-lg text-slate-400">
              {keys.length === 0
                ? "Empty"
                : keys.map((key) => {
                    return (
                      <div key={key} className=" flex gap-2">
                        <div>Q{key}:</div>
                        <div>{userdata.ans[key]}</div>
                      </div>
                    );
                  })}
            </div>
          </Collapse>
        </div>
      </div>
    </DialogBackgrond>
  );
};

export default DashCardPreview;

import React, { useEffect, useRef } from "react";

const InputRadio = ({ item, i }) => {
  return (
    <fieldset
      key={item.key}
      id={item.key}
      className=" text-base sm:text-lg md:text-xl text-white w-[90vw] sm:w-[70vw] md:max-w-[60vh] p-6 border bg-zinc-800/90 rounded-lg flex flex-col gap-4"
    >
      <h1 className=" break-words">
        <span>Q{i + 1}) </span>
        {item.data.question}
      </h1>
      
        {item.data.options.map((option) => {
          return (
            <div
              className={`flex justify-between gap-1 rounded hover:bg-zinc-900 p-1 `}
            >
              <label htmlFor={option.key}>{option.value}</label>
              <input
                key={option.key}
                type="radio"
                name={item.key}
                id={option.key}
                value={option.value}
              />
            </div>
          );
        })}

    </fieldset>
  );
};

const GetAnsFromUser = ({ question }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    for(let i=0; i<question[0].data.question.length; i++){
        console.log(e.target[i])
    }
  };

  return (
    <div className="text-white">
      <h1 className=" md:text-2xl ">{question[0].data.title}</h1>
      <p>{question[0].data?.des || "Not Available"}</p>
      <form onSubmit={handleSubmit}>
        {question[0].data.question.map((item, i) => {
          return <InputRadio item={item} i={i} />;
        })}
        <button
          type="submit"
          className={` shadow w-[80vw] md:w-[40vw] rounded-md text-center hover:bg-green-800 text-white p-2 bg-green-700 `}
        >
          Preview & Save
        </button>
      </form>
    </div>
  );
};

export default GetAnsFromUser;

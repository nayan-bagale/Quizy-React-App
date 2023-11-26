import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Tags from "./Tags";

const Search = ({ setQuestionsDisplay, quesAttemted }) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("name");

  useEffect(() => {
    setQuestionsDisplay(quesAttemted);
  }, [quesAttemted]);

  const searchData = (data) => {
    setSearch(data);
    data = data.toLowerCase();
    if (data.length === 0) {
      setQuestionsDisplay(quesAttemted);
    } else {
      setQuestionsDisplay(
        quesAttemted.filter((item) => {
          return item[tags]?.toLowerCase().includes(data);
        })
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mb-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-2 relative"
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          className=" p-1 pr-7 rounded-md bg-transparent border border-slate-300 text-lg md:text-xl  "
          onChange={(e) => {
            searchData(e.target.value);
          }}
        />
        {search && (
          <button
            className=" absolute top-1 md:top-2 right-10 text-yellow-400"
            onClick={() => setSearch("")}
          >
            <IoIosClose />
          </button>
        )}
        {/* <div className="  flex items-center justify-center bg-slate-400 p-1 rounded-md shadow-md ">
          <button
            type="submit"
            className=" bg-slate-100 rounded-md shadow-inner text-black "
          >
            <CiSearch />
          </button>
        </div> */}
      </form>
      <Tags setTags={setTags} tags={tags} />
      <hr className=" w-3/4" />
    </div>
  );
};

export default Search;

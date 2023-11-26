import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const tagsList = ["name", "email", "qtitle"];
const Tags = ({ setTags, tags }) => {
  return (
    <div className=" flex gap-4">
      {tagsList.map((item) => {
        return <Tag item={item} key={item} setTags={setTags} tags={tags} />;
      })}
    </div>
  );
};

const Tag = ({ item, setTags, tags }) => {
  const [open, setOpen] = useState(false);
  const selectTag = () => {
    setTags(item);
    setOpen(true);
  };

  return (
    <div
      className={` text-base md:text-md border px-1 rounded-md relative ${
        tags.includes(item) && "bg-slate-700 border-slate-700"
      } `}
    >
      <button onClick={() => selectTag()}>{item}</button>
    </div>
  );
};

export default Tags;

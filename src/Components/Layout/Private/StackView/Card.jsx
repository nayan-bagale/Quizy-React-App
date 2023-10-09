import { useCallback } from "react";

const Card = ({ item, i, setAns, ans }) => {
  const handleClick = useCallback((item, option) => {
    setAns((prev) => ({ ...prev, [item.key]: option.value }));
  });
  return (
    <fieldset
      key={`${item.key}-group`}
      id={`${item.key}-group`}
      className=" text-base sm:text-lg md:text-xl text-white w-[90vw] sm:w-[70vw] md:max-w-[60vh] p-6 border border-slate-800 bg-slate-900 shadow md:shadow-md rounded-lg flex flex-col gap-4"
    >
      <h1 className=" break-words">
        <span>Q{i + 1}) </span>
        {item.data.question}
      </h1>

      <div className="flex flex-col gap-1 ml-4">
        {item.data.options.map((option, index) => {
          return (
            <div
              className={`flex justify-between gap-1 border border-slate-700 rounded p-1 ${
                ans[item.key] === option.value ? "bg-slate-700" : ""
              }`}
            >
              <label
                htmlFor={`${option.key}-item-${item.key}-group`}
                className="w-full px-4 cursor-pointer"
                onClick={() => handleClick(item, option)}
              >
                {index + 1}) {option.value}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Card;

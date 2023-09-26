import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

const AddQuestions = ({
  setQuestions,
  edit,
  saveQuestionDB,
  isValid,
}) => {
  const [form, setForm] = useState(edit);

  // const isValid = totalQuestions > 0;

  // {
  //   question: "",
  //   options: [{ key: 1, value: "" }],
  //   ans: "",
  // }

  const [isMatchAns, setIsMatchAns] = useState(true);

  const Validation = () => {
    if (form.question.length < 6) {
      alert("Question length is too small.");
      return false;
    }

    if (form.options.length < 2) {
      alert("Options must be two.");
      return false;
    }

    if (form.options[0].value.length < 1 || form.options[1].value.length < 1) {
      alert("Options length is too small.");
      return false;
    }

    if (form.ans.length < 1) {
      alert("Ans must have value.");
      return false;
    }

    return true;
  };

  useEffect(() => {
    setForm(edit);
  }, [edit]);

  const handleoptionsAdd = () => {
    if (form.options.length >= 4) {
      console.log("limit");
      return;
    }

    setForm((prev) => {
      return {
        ...prev,
        options: [...prev.options, { key: prev.options.length + 1, value: "" }],
      };
    });
  };

  const handleoptionsUpdate = (e, index) => {
    const updatedOptions = form.options.map((item, i) => {
      if (i === index) {
        return { ...item, value: e.target.value };
      } else {
        return item;
      }
    });

    setForm((prev) => {
      return { ...prev, options: updatedOptions };
    });
  };

  const handleoptionDelete = (index) => {
    const updatedOptions = form.options.filter((item, i) => {
      return i !== index;
    });

    setForm((prev) => {
      return { ...prev, options: updatedOptions };
    });
  };

  const handleDeleteQuestion = () => {
    setForm({
      question: "",
      options: [
        { key: 1, value: "" },
        { key: 2, value: "" },
      ],
      ans: "",
    });
  };

  const handleAddQuestion = () => {
    if (!Validation()) return;
    setQuestions((prev) => {
      return {
        ...prev,
        question: [
          ...prev.question,
          { key: prev.question.length + 1, data: form },
        ],
      };
    });
    handleDeleteQuestion();
  };

  const handleAnswer = (e) => {
    setForm((prev) => {
      return { ...prev, ans: e.target.value };
    });

    const $ = form.options.filter((item) => item.value === e.target.value);
    setIsMatchAns($.length > 0);
  };

  return (
    <>
      <div className=" flex flex-col gap-4 bg-slate-800 border-slate-700 w-[80vw] md:w-[40vw] border p-4 rounded text-white">
        <div className=" flex flex-col text-base md:text-xl gap-2">
          <label htmlFor="question">Question: </label>
          <input
            className=" bg-transparent border rounded md:max-w-[80%]"
            type="text"
            name="question"
            placeholder=" ex: Who is IronMan ?"
            value={form.question}
            onChange={(e) =>
              setForm((prev) => {
                return { ...prev, question: e.target.value };
              })
            }
          />
        </div>
        <div className=" flex flex-col gap-2 list-decimal">
          <h3>Options:</h3>
          <>
            {form.options.map((item, index) => {
              return (
                <li key={item.key} className=" flex gap-2">
                  <p>-</p>
                  <input
                    className=" bg-transparent border rounded"
                    type="text"
                    value={form.options[index].value}
                    name={"op" + index}
                    placeholder={" Option " + (index + 1)}
                    onChange={(e) => handleoptionsUpdate(e, index)}
                  />
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded px-1.5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handleoptionDelete(index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </li>
              );
            })}
          </>
          <button
            className=" text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm w-fit p-2.5 text-center ml-4 mt-4 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
            onClick={handleoptionsAdd}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <div className=" flex justify-between">
          <div className=" flex flex-col gap-1">
            <h3>Ans:</h3>
            <input
              className=" bg-transparent border rounded"
              value={form.ans}
              type="text"
              name="ans"
              placeholder=" Answer"
              onChange={(e) => handleAnswer(e)}
            />
            {isMatchAns ? (
              <p></p>
            ) : (
              <p className=" text-xs text-red-600">Answer did not match.</p>
            )}
          </div>
          <div className=" flex gap-2 md:gap-4 items-end">
            <button
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full p-2 md:p-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleAddQuestion}
              disabled={!isMatchAns}
            >
              <AiOutlineCheck />
            </button>
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full p-2 md:p-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={handleDeleteQuestion}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
      <button
        className={` shadow w-[80vw] md:w-[40vw] rounded-md text-center hover:bg-green-800 text-white p-2 ${
          isValid ? "bg-green-700" : "bg-green-800 cursor-not-allowed"
        } `}
        disabled={!isValid}
        onClick={saveQuestionDB}
      >
        Preview & Save
      </button>
    </>
  );
};

export default AddQuestions;

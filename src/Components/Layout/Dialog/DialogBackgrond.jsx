import React, { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const DialogBackgrond = ({ children, setIsDialogOpen }) => {
  const ref = useRef(null);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="flex justify-center items-center fixed h-screen w-full bg-black/80 z-10 top-0 right-0">
      <div
        ref={ref}
        className="relative flex flex-col h-[80%] p-4 text-xl text-white w-full md:w-[40vw] bg-slate-800 md:rounded-xl"
      >
        <button className=" absolute right-4 top-4" onClick={handleClose}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default DialogBackgrond;

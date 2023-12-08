import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserAuth } from "../ContextApi/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const [isopen, setIsopen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsopen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const navAnimate = {
    initial: { x: -500 },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: -500,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className=" flex justify-between w-full items-center bg-gray-950 text-white py-4">
      <div className=" text-2xl bold">
        <p
          className=" relative mx-4 cursor-pointer "
          onClick={() => setIsopen(true)}
        >
          <AiOutlineMenu />
        </p>
        <AnimatePresence>
          {isopen && (
            <>
              <motion.div
                className=" z-10 bg-black/40 absolute top-0 w-full min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
              ></motion.div>
              <motion.div
                className=" z-20 px-4 md:shadow-xl fixed flex flex-col justify-between gap-4 list-none top-0 py-6 max-w-sm w-full min-h-screen bg-slate-800"
                ref={ref}
                variants={navAnimate}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
              >
                <div className=" flex items-center justify-between">
                  <div className=" flex items-center gap-2">
                    <img
                      src={user.photoURL}
                      width={100}
                      height={100}
                      alt="profile"
                      className=" rounded-full w-12 h-12"
                    />
                    <Link
                      to={"/profile"}
                      onClick={() => setIsopen(false)}
                      className=" text-xl px-2 py-1 rounded-xl "
                    >
                      {user.displayName}
                    </Link>
                  </div>
                  <button onClick={() => setIsopen(false)}>
                    <AiOutlineClose />
                  </button>
                </div>
                <div className=" flex flex-col gap-2">
                  <Link
                    className="p-2 px-4 rounded-xl hover:shadow hover:bg-slate-600"
                    to={"/"}
                    onClick={() => setIsopen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    className="p-2 px-4 rounded-xl hover:shadow hover:bg-slate-600"
                    to={"/questions"}
                    onClick={() => setIsopen(false)}
                  >
                    Create Questions
                  </Link>
                </div>
                <button
                  className=" flex p-2 px-4 rounded-xl items-center gap-2 hover:shadow hover:bg-slate-600"
                  onClick={logOut}
                >
                  <FiLogOut />
                  <span>SignOut</span>
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className=" flex items-center gap-6 mr-5">
        <Link
          to="/"
          className=" hover:bg-gradient-to-r from-teal-100 to-teal-300 rounded overflow-hidden "
        >
          <img src="/logo1.png" alt="logo" className=" w-[5rem] " />
        </Link>
        <Link
          to="https://github.com/nayan-bagale/Quizy-React-App"
          target="_blank"
          className=" text-4xl hover:text-stone-400"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

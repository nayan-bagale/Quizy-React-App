import React from "react";
import { Watch, ProgressBar } from "react-loader-spinner";
import { motion } from "framer-motion";

const LoaderWatch = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <img src="/logo1.png" alt="logo" className=" w-[8rem]" />
      </motion.div>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="white"
        barColor="#51E5FF"
      />
      {/* <Watch
        height="80"
        width="80"
        radius="48"
        color="white"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /> */}
    </div>
  );
};

export default LoaderWatch;

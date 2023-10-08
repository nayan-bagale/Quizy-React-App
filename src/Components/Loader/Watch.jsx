import React from "react";
import { Watch } from "react-loader-spinner";

const LoaderWatch = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="white"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default LoaderWatch;

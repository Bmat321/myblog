import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ width, color, height }) => {
  return (
    <div>
      <Circles
        height={height}
        width={width}
        color={color}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;

import React, { useEffect, useState } from "react";
import Bar from "./Bar";

const ProgressBar = ({ progressNo }) => {
  const barNo = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex gap-1 mt-2">
      {barNo?.map((singleBar, index) => (
        <Bar key={index} index={index} progressNo={progressNo} />
      ))}
    </div>
  );
};

export default ProgressBar;

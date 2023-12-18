import React, { useEffect, useState } from "react";

const Bar = ({ progressNo, index }) => {
  const [progressInfo, setProgressInfo] = useState({
    color: "",
    valueType: false,
  });
  useEffect(() => {
    if (index === 0) {
      if (index <= progressNo && progressNo >= 0) {
        setProgressInfo({
          color: "progress-error",
          valueType: true,
        });
      } else {
        setProgressInfo({
          color: "progress-warning",
          valueType: false,
        });
      }
    } else if (index === 1) {
      if (index <= progressNo && progressNo >= 1) {
        setProgressInfo({
          color: "progress-error",
          valueType: true,
        });
      } else {
        setProgressInfo({
          color: "progress-warning",
          valueType: false,
        });
      }
    } else if (index === 2 || index === 3) {
      if (index <= progressNo) {
        setProgressInfo({
          color: "progress-warning",
          valueType: true,
        });
      } else {
        setProgressInfo({
          color: "progress-warning",
          valueType: false,
        });
      }
    } else if (index === 4 || index === 5) {
      if (4 <= progressNo) {
        setProgressInfo({
          color: "progress-success ",
          valueType: true,
        });
      } else {
        setProgressInfo({
          color: "progress-warning",
          valueType: false,
        });
      }
    } else {
      setProgressInfo({
        color: "",
        valueType: false,
      });
    }
  }, [progressNo]);
  return (
    <progress
      className={`progress ${progressInfo?.color} w-1/6`}
      value={progressInfo?.valueType ? 100 : 0}
      max="100"
    ></progress>
  );
};

export default Bar;

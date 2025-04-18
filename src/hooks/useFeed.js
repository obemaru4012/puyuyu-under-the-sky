import React from "react";

/**
 * フィード
 * @returns
 */
const useFeed = () => {
  // タイムライン
  const [timeLine, setTimeLine] = React.useState([]);
  const changeTimeLine = ({ timeLine }) => {
    setTimeLine(timeLine);
  };

  return { timeLine, setTimeLine, changeTimeLine };
};

export default useFeed;

import React from "react";

const Loading = (props) => {
  return (
    <div className="loading-container">
      <div className="loading-pizza"></div>
      <div className="loading-text">Loading {props.title}...</div>
    </div>
  );
};

export default Loading;

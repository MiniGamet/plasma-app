import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./main.css";

const Main: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};

export default Main;

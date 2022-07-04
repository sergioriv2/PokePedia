import React from "react";
import Header from "../components/Header";
import BodyLayout from "./BodyLayout";

import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home">
      <Header />
      <BodyLayout />
    </div>
  );
};

export default HomeLayout;

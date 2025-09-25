import React from "react";
import Navrand from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navrand />
      hi this is homepage
    </div>
  );
};

export default Home;

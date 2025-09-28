"use client";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* {console.log("this is the user: ", user)} */}
      hi this is homepage
    </div>
  );
};

export default Home;

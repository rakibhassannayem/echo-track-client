import React from "react";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

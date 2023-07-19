import React from "react";
import { Outlet } from "react-router-dom";
import CampDirectorHeader from "../components/campDirectorHeader";
import Footer from "../components/footer/Footer";

const DirectorLayout = () => {
  return (
    <div className="landingPage">
      <Outlet />
      <Footer />
    </div>
  );
};
export default DirectorLayout;

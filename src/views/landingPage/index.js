import React from "react";
import "./landingPage.scss";
import CampIdFor from "./campIdFor";
import Partners from "./partners";
import SportsSlide from "./sportsSlide";
import TopSection from "./topSection";
import WhyCampId from "./whyCampId";

const LandingPage = () => {
  return (
    <>
      <TopSection />
      <WhyCampId />
      <CampIdFor />
      <SportsSlide />
      <Partners />
    </>
  );
};
export default LandingPage;

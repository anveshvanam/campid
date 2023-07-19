import React from "react";
import "./landingPage.scss";
import slide1 from "../../assets/images/m-basketball.png";
import slide2 from "../../assets/images/w-basketball.png";
import slide3 from "../../assets/images/baseball.png";
import slide4 from "../../assets/images/football.png";

const SportsSlide = () => {
  return (
    <div className="slider-main">
      <h1 className="slider-heading">Sports in CampID Database</h1>
      <a href="/" className="slider-view-more">
        {"View Full List >"}
      </a>
      <div className="slider-block">
        <div>
          <img src={slide1} alt="slider" />
          <p>Men’s Basketball</p>
        </div>
        <div>
          <img src={slide2} alt="slider" />
          <p>Women’s Basketball</p>
        </div>
        <div>
          <img src={slide3} alt="slider" />
          <p>Baseball</p>
        </div>
        <div>
          <img src={slide4} alt="slider" />
          <p>Football</p>
        </div>
      </div>
    </div>
  );
};
export default SportsSlide;

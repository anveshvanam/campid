import React from "react";
import "./landingPage.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

const TopSection = () => {
  const navigate = useNavigate();
  return (
    <div className="campid-hero">
      <div className="campid-hero-sub">
        <div className="main-container">
          <p className="campid-caption">
            Looking for a great sports camp to attend or manage?
            <br /> In just a few minutes, you’ll be setup within our database!
          </p>
          <div className="campid-hero-btns">
            <Button
              width={"448px"}
              height={"64px"}
              color={"#ec6f00"}
              background={"#fff"}
              border={"1px solid #ec6f00"}
              onClick={() => navigate("/parent-athlete-signup")}
            >
              Parent/Athlete Signup
            </Button>
            <Button
              width={"448px"}
              height={"64px"}
              color={"#ec6f00"}
              background={"#fff"}
              border={"1px solid #ec6f00"}
              onClick={() => navigate("/campdirectorsignup")}
            >
              Camp Director Signup
            </Button>
          </div>
          <a href="/" className="campid-hero-link">
            Already have access to CampID?
          </a>
          <div className="campid-hero-login">
            <Button
              width={"448px"}
              height={"64px"}
              color={"#fff"}
              background={"#ec6f00"}
              border={"none"}
              onClick={()=>navigate('/login')}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopSection;

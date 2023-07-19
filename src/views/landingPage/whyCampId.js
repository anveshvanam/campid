import React from "react";
import "./landingPage.scss";
import PlayIcon from "../../assets/images/icon-play-cta.png";
import Button from "../../components/button";

const WhyCampId = () => {
  return (
    <div className="main-container">
      <div className="why-campid-main">
        <h1 className="why-campid-heading">Why CampID?</h1>
        <p className="why-campid-detail">
          CampID gives parents year-round access to discover and
          <br className="why-detail-br" /> compare sports camps all over the
          world. <br />
          <br />
          Find the right training camp using our app or website to find, apply,
          <br className="why-detail-br" />
          sign up, and review the sports camps that you’ve attended. <br />
          <br />
          Camp providers use CampID to boost their reach and to use athletes’
          feedback to improve their facilities and programs – this ensures
          stronger development for both the athlete and sports camp.
        </p>
        <div className="why-campid-watch">
          <Button
            color={"#ec6f00"}
            background={"#fff"}
            border={"1px solid #ec6f00"}
            width={"450px"}
            height={"50px"}
          >
            <img src={PlayIcon} alt="play icon" />
            Watch Video
          </Button>
        </div>
      </div>
    </div>
  );
};
export default WhyCampId;

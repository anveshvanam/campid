import React from "react";
import "./landingPage.scss";
import athlete from "../../assets/images/img-athlete-icon.png";
import director from "../../assets/images/img-director-icon.png";
import clipboard from "../../assets/images/icon-clipboard.png";

const CampIdFor = () => {
  return (
    <div className="main-container">
      <div className="campid-for-main">
        <div className="campid-for-card">
          <img src={athlete} alt="logo" />
          <p className="campid-for-heading">CampID For Athletes</p>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Easy access to sports camps from computer or smartphone</p>
          </div>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Avoid gaps in your training with year-round camp availability</p>
          </div>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Find local camps, national camps, and international camps</p>
          </div>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Review your experience after each camp you attend</p>
          </div>
        </div>
        <div className="campid-for-card">
          <img src={director} alt="logo" />
          <p className="campid-for-heading">CampID For Sports Camps</p>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Expand your reach to attract athletes across the globe</p>
          </div>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Increased your number of athlete enrollments</p>
          </div>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Get noticed by sponsors</p>
          </div>
          <div className="campid-for-points">
            <img src={clipboard} alt="icon" />
            <p>Build and improve your camp with athletes’ feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampIdFor;

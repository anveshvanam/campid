import React from "react";
import "./sportsPage.scss";
import sport1 from "../../assets/images/m-basketball.png";
import sport2 from "../../assets/images/w-basketball.png";
import sport3 from "../../assets/images/football.png";
import sport4 from "../../assets/images/baseball.png";
import sport5 from "../../assets/images/men-s-soccer.png";
import sport6 from "../../assets/images/women-s-soccer.png";
import sport7 from "../../assets/images/softball.png";
import sport8 from "../../assets/images/men-s-lacrosse.png";
import sport9 from "../../assets/images/women-s-lacrosse.png";
import sport10 from "../../assets/images/field-hockey.png";
import sport11 from "../../assets/images/men-s-swimming.png";
import sport12 from "../../assets/images/women-s-swimming.png";
import JoinCampID from "../../components/joinCampID";
import StaticHead from "../../components/staticHead";

const SportsPage = () => {
  return (
    <div className="sports-main">
     <StaticHead/>
      <div className="main-container">
        <h6 className="sports-description">
          CampID currently has 5 sports we cover for camp searching and
          registration. We will be growing that list of sports to over 15.
          Please take a look below of the camps we cover now and will be within
          our database in the future.
          <br />
          <br /> There are currently over 3000 camps in the database.
        </h6>
      </div>
      <div className="main-container">
        <div className="sports-cards-block">
          <div className="sports-card">
            <img src={sport1} alt="sports" />
            <p>Men’s Basketball</p>
          </div>
          <div className="sports-card">
            <img src={sport2} alt="sports" />
            <p>Women’s Basketball</p>
          </div>
          <div className="sports-card">
            <img src={sport3} alt="sports" />
            <p>Football</p>
          </div>
          <div className="sports-card">
            <img src={sport4} alt="sports" />
            <p>Baseball</p>
          </div>
          <div className="sports-card">
            <img src={sport5} alt="sports" />
            <p>Men’s Soccer</p>
          </div>
          <div className="sports-card">
            <img src={sport6} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Women’s Soccer</p>
          </div>
          <div className="sports-card">
            <img src={sport7} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Softball</p>
          </div>
          <div className="sports-card">
            <img src={sport8} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Men’s Lacrosse</p>
          </div>
          <div className="sports-card">
            <img src={sport9} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Women’s Lacrosse</p>
          </div>
          <div className="sports-card">
            <img src={sport10} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Field Hockey</p>
          </div>
          <div className="sports-card">
            <img src={sport11} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Men’s Swimming</p>
          </div>
          <div className="sports-card">
            <img src={sport12} alt="sports" />
            <h6>Coming Soon</h6>
            <p>Women’s Swimming</p>
          </div>
        </div>
        <div className="joinCampIdComponent">
          <JoinCampID />
        </div>
      </div>
    </div>
  );
};
export default SportsPage;

import React from "react";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";

const Partners = () => {
  return (
    <div className="partners-main">
      <h1>PARTNERS & ALLIANCES</h1>
      <h6>Let's work together to improve the sports camp experience</h6>
      <div className="partners-logo">
       <div> <img src={partner1} alt="partner1" /></div>
        <div><img src={partner2} alt="partner2" /></div>
        <div className="partner3"><img src={partner3} alt="partner3" /></div>
      </div>
    </div>
  );
};
export default Partners;

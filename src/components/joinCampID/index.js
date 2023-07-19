import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import "./joinCampID.scss";

const JoinCampID = () => {

  const navigate = useNavigate()
  return (
    <div className="joinCampIDDiv">
      <div className="joinCampID">
        <h1>Join CampID</h1>
        <p>
          Don’t have an account? Although its free to search our database
          joining offers full access and registrations to any camp.
        </p>
        <div className="joinCampIDButton">
          <Button
            width={"320px"}
            height={'48px'}
            color={"#ec6f00"}
            background={"#fff"}
            border={"1px solid #ec6f00"}
            onClick={() => navigate("/parent-athlete-signup")}
          >
            Parent/Athlete Signup
          </Button>
          <Button
            width={"320px"}
            height={'48px'}
            color={"#ec6f00"}
            background={"#fff"}
            border={"1px solid #ec6f00"}
            onClick={() => navigate("/campdirectorsignup")}
          >
            Camp Director Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinCampID;

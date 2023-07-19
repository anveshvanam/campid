import React from "react";
import Button from "../button";
import "./otherSignUp.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const OtherSignUp = ({ isCampDirector }) => {
  const navigate = useNavigate();
  return (
    <div className="other-signup-main">
      <h1>{isCampDirector ? "Camp Director?" : "Parent or Athlete?"} </h1>
      <h6>
        {isCampDirector
          ? "Don’t have an account? Sign up now to post your camps, manage registrations and gain access to our database of athletes."
          : "Don’t have an account? Sign up now to search and register for camps within our database."}
      </h6>
      <div>
        <Button
          width={"448px"}
          height={"64px"}
          color={"#ec6f00"}
          background={"#fff"}
          border={"1px solid #ec6f00"}
          onClick={() =>
            navigate(
              isCampDirector ? "/campdirectorsignup" : "/parent-athlete-signup"
            )
          }
        >
          {isCampDirector ? "Camp Director Signup" : "Parent/Athlete Signup"}
        </Button>
      </div>
    </div>
  );
};

OtherSignUp.defaultProps = {
  isCampDirector: true,
};

OtherSignUp.propTypes = {
  isCampDirector: PropTypes.bool,
};

export default OtherSignUp;

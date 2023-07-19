import React from "react";
import "./staticHead.scss";
import PropTypes from "prop-types";

const StaticHead = ({ title }) => {
  return (
    <div className="static-head-main">
      <div className="static-head-block">
        <div className="main-container">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

StaticHead.defaultProps = {
  title: "Sports in CampID Database",
};

StaticHead.propTypes = {
  title: PropTypes.string,
};

export default StaticHead;

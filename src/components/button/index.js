import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({
  lable,
  width,
  height,
  color,
  background,
  border,
  isDisabled,
  children,
  borderRadius,
  ...props
}) => {
  const style = {
    width: width,
    height: height,
    color: color,
    background: background,
    border: border,
    borderRadius: borderRadius,
  };
  return (
    <>
      <button
        className={`common-btn ${isDisabled ? "common-btn-disabled" : ""}`}
        style={style}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  width: "448px",
  height: "64px",
  color: "#fff",
  background: "#ec6f00",
  border: "1px solid #ec6f00",
  borderRadius: "4px"
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  isDisabled: PropTypes.bool,
  borderRadius: PropTypes.string,
};

export default Button;

import React, { useState } from "react";
import Button from "../../components/button";
import OtherSignUp from "../../components/otherSignUp";
import "./campDirectorSignup.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader";

const CampDirectorSignup = () => {

  const navigate = useNavigate();
  const [role, setRole] = useState("athlete");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });
  console.log("form data",formData)
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    let flag = true;
    // eslint-disable-next-line no-useless-escape
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pinReg = /^(?=[0-9]*$)(?:.{6})$/;

    if (formData.firstName === "") {
      flag = false;
      setError((prevState) => ({
        ...prevState,
        firstName: "First Name is required!",
      }));
    }

    if (formData.lastName === "") {
      flag = false;
      setError((prevState) => ({
        ...prevState,
        lastName: "Last Name is required!",
      }));
    }

    if (formData.email === "") {
      flag = false;
      setError((prevState) => ({
        ...prevState,
        email: "Email is required!",
      }));
    } else if (!emailReg.test(formData.email)) {
      flag = false;
      setError((prevState) => ({
        ...prevState,
        email: "Email is invalid!",
      }));
    }

    if (formData.zipCode === "") {
      flag = false;
      setError((prevState) => ({
        ...prevState,
        zipCode: "Zipcode is required!",
      }));
    } else if (!pinReg.test(formData?.zipCode)) {
      flag = false;
      setError((prevState) => ({
        ...prevState,
        zipCode: "Zipcode should be 6 digit number",
      }));
    }
    
    return flag;
  };

  const handleTabChange = (name) => {
    setRole(name);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
    });
    setError({ firstName: "", lastName: "", email: "", zipCode: "" });
  };

  return (
    <div className="director-signup-main">
      <h1 className="director-signup-heading">
        Ready to post your personalized camps and maintain them?
        <br />
        Signup and get full access to post & manage registrations!
      </h1>
      <div className="director-signup-tabs">
        <div className="director-signup-div">
          <span
            className="director">
            Camp Director
          </span>
        </div>
      </div>
      <div className="director-signup-form">
        <div className="director-signup-input-group">
          First Name
          <input
            value={formData?.firstName}
            name="firstName"
            onChange={(e) => handleInputChange(e)}
          />
          {error?.firstName !== "" && (
            <span className="error">{error?.firstName}</span>
          )}
        </div>
        <div className="director-signup-input-group">
          Last Name
          <input
            value={formData?.lastName}
            name="lastName"
            onChange={(e) => handleInputChange(e)}
          />
          {error?.lastName !== "" && (
            <span className="error">{error?.lastName}</span>
          )}
        </div>
        <div className="director-signup-input-group">
          Email Address
          <input
            value={formData?.email}
            name="email"
            onChange={(e) => handleInputChange(e)}
          />
          {error?.email !== "" && <span className="error">{error?.email}</span>}
        </div>
        <div className="director-signup-input-group">
          Zip Code
          <input
            value={formData?.zipCode}
            name="zipCode"
            onChange={(e) => handleInputChange(e)}
            className="zipcode-input"
          />
          {error?.zipCode !== "" && (
            <span className="error">{error?.zipCode}</span>
          )}
        </div>
      </div>
      <div className="director-btn-group">
        <Button
          width={"448px"}
          height={"64px"}
          color={"#ec6f00"}
          background={"#fff"}
          border={"1px solid #ec6f00"}
          onClick={() => navigate("/home")}
        >
          Cancel
        </Button>
        <Button
          width={"448px"}
          height={"64px"}
          color={"#fff"}
          background={"#ec6f00"}
          border={"1px solid #ec6f00"}
          isDisabled={
            formData.firstName === "" ||
              formData.lastName === "" ||
              formData.email === "" ||
              formData.zipCode === ""
              ? true
              : false
          }
          onClick={() => handleValidation()}
        >
          Next
        </Button>
      </div>
      <OtherSignUp isCampDirector={false} />
    </div>
  );
};

export default CampDirectorSignup;

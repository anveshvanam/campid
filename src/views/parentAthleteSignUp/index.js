import React, { useState } from "react";
import Button from "../../components/button";
import OtherSignUp from "../../components/otherSignUp";
import "./parentAthleteSignUp.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import axios from "axios";

const ParentAthleteSignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [role, setRole] = useState("athlete");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

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

  const handleNextPage = async () => {
    setIsLoading(true);
    axios.post('/signup', { "emailUsername": formData.email }, {
  
    }).then((result) => result.data).then((data) => {
      if (!data.isSccess) {
        throw new Error(data.apiError.errorMessage)
      }
      setIsLoading(false);
      navigate(`/generate-password/${formData.email}`, { state: { ...formData, accountType: role } });
    }).catch((e) => {
      setIsLoading(false);
      console.log(e);
    })
  }



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

  if (isLoading) {
    return <Loader />
  } else {

    return (
      <div className="athlete-signup-main">
        <h1 className="athlete-signup-heading">
          Ready for personalized camps and features?
          <br className="brk-head" />
          Signup and get full access to registrations now!
        </h1>
        <div className="athlete-signup-tabs">
          <span
            className={`${role === "athlete" ? "athlete-active-tabs" : ""}`}
            onClick={() => handleTabChange("athlete")}
          >
            Athlete
          </span>
          <span
            className={`${role === "guardian" ? "athlete-active-tabs" : ""}`}
            onClick={() => handleTabChange("guardian")}
          >
            Parent
          </span>
        </div>
        <div className="athlete-signup-form">
          <div className="athlete-signup-input-group">
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
          <div className="athlete-signup-input-group">
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
          <div className="athlete-signup-input-group">
            Email Address
            <input
              value={formData?.email}
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
            {error?.email !== "" && <span className="error">{error?.email}</span>}
          </div>
          <div className="athlete-signup-input-group">
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
        <div className="athlete-btn-group">
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
            onClick={async () => {
              if (handleValidation()) {
                await handleNextPage();
              }
            }}
          >
            Next
          </Button>
        </div>
        <OtherSignUp isCampDirector={true} />
      </div>
    );
  }
};
export default ParentAthleteSignUp;

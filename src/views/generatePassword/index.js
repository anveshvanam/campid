import React, { useState } from "react";
import "../parentAthleteSignUp/parentAthleteSignUp.scss";
import Button from "../../components/button";
import close from "../../assets/images/close.png";
import confirm from "../../assets/images/confirm.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const GeneratePassword = () => {

  const state = useLocation();
  const location = state.state;
  console.log(location)

  const navigate = useNavigate();

  let { email } = useParams();

  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    regCode: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    regCode: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = async (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setError((prevState) => ({
      ...prevState,
      [name]: "",
    }));

  };

  let isMaxChar = formData?.password?.length < 8 ? false : true;

  let uppercaseReg = /[A-Z]/;
  let isUpperCase = uppercaseReg.test(formData?.password);

  let numericReg = /\d/;
  let isNumericReg = numericReg.test(formData?.password);

  // eslint-disable-next-line no-useless-escape
  let specialCharReg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let isSpecialCharReg = specialCharReg.test(formData?.password);

  const handleValidation = () => {
    let flag = true;

    if (formData?.regCode === "") {
      setError((prevState) => ({
        ...prevState,
        regCode: "Registration Code is required!",
      }));
      flag = false;
    }

    if (formData?.password === "") {
      setError((prevState) => ({
        ...prevState,
        password: "Password is required!",
      }));
      flag = false;
    }

    if (formData?.confirmPassword === "") {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: "Confirm Password is required!",
      }));
      flag = false;
    } else if (formData?.password !== formData?.confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: "Confirm Password not match with Password!",
      }));
    }

    return flag
  };

  // const convertString = (str) => {
  //   return str.slice(0, 3) + "-" + str.slice(3);
  // }


  return (
    <div className="athlete-signup-main">
      <h1 className="athlete-signup-heading">
        A registration code has been sent to your email. Please enter the code
        and select a password.
      </h1>
      <div className="athlete-signup-form">
        <div className="athlete-signup-input-group">
          Email Address
          <p className="selected-email">{email}</p>
        </div>
        <div className="athlete-signup-input-group">
          <div className="pass-labels">
            Registration Code
            {/* <span className="confirm-lable">
              <img alt="pass" src={close} />
              confirmed
            </span> */}
          </div>
          <input
            value={formData?.regCode}
            name="regCode"
            type="password"
            onChange={(e) => handleChange(e)}
          />
          {error?.regCode !== "" && (
            <span className="error">{error?.regCode}</span>
          )}
        </div>
        <div className="athlete-signup-input-group">
          <div className="pass-labels">
            Create Password
            <span className="show-lable" onClick={() => setShowPass(!showPass)}>
              Show
            </span>
          </div>
          <input
            name="password"
            value={formData?.password}
            onChange={(e) => handleChange(e)}
            type={showPass ? "text" : "password"}
          />
          {formData?.password !== "" && (
            <div className="pass-requrements">
              <p className="pass-requrements-head">Password Requirements</p>
              <p
                className="pass-requrements-list"
                style={{ color: isMaxChar ? "#07af1b" : "#4c4c4c" }}
              >
                <img alt="pass" src={isMaxChar ? confirm : close} />
                At least 8 characters
              </p>
              <p
                className="pass-requrements-list"
                style={{ color: isUpperCase ? "#07af1b" : "#4c4c4c" }}
              >
                <img alt="pass" src={isUpperCase ? confirm : close} />
                One uppercase character
              </p>
              <p
                className="pass-requrements-list"
                style={{ color: isNumericReg ? "#07af1b" : "#4c4c4c" }}
              >
                <img alt="pass" src={isNumericReg ? confirm : close} />
                One numerical character
              </p>
              <p
                className="pass-requrements-list"
                style={{ color: isSpecialCharReg ? "#07af1b" : "#4c4c4c" }}
              >
                <img alt="pass" src={isSpecialCharReg ? confirm : close} />
                One special character (@,!,*,$,%)
              </p>
            </div>
          )}
          {error?.password !== "" && (
            <span className="error">{error?.password}</span>
          )}
        </div>
        <div className="athlete-signup-input-group">
          Confirm Password
          <input
            value={formData?.confirmPassword}
            name="confirmPassword"
            type="password"
            onChange={(e) => handleChange(e)}
          />
          {error?.confirmPassword !== "" && (
            <span className="error">{error?.confirmPassword}</span>
          )}
        </div>
      </div>
      <div className="athlete-btn-group" style={{marginBottom:'800px'}}>
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
          // isDisabled={
          //   formData.firstName === "" ||
          //     formData.lastName === "" ||
          //     formData.email === "" ||
          //     formData.zipCode === ""
          //     ? true
          //     : false
          // }

          // {
          //  


          //   "accountType": "campOwner"
          // }
          onClick={() => {
            if (handleValidation()) {
              navigate('/termsandconditions',
                {
                  state: {
                    emailUsername: email, nameFirst: location.firstName, nameLast: location.lastName,
                    companyName: location.Organization, validationCode: formData.regCode, newPassword: formData.password,
                    accountType: location.accountType
                  }
                });
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default GeneratePassword;

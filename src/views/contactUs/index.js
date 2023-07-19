import React from "react";
import Button from "../../components/button";
import StaticHead from "../../components/staticHead";
import "./contactUs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEarthAfrica,
} from "@fortawesome/free-solid-svg-icons";
import telephone from "../../assets/images/icon-contact-fax.png";
import JoinCampID from "../../components/joinCampID";

const ContactUs = () => {
  return (
    <div>
      <StaticHead title="Contact Us" />
      <div className="main-container">
        <div className="contactus-block">
          <div className="contactus-left">
            <h1 className="contactus-heading">Sales Support & Inquiries</h1>
            <h6 className="contactus-description">
              Submit your inquiry below or give us a call.
            </h6>
            <div className="contactus-form">
              <label>Full Name</label>
              <input />
              <label>Email Address</label>
              <input />
              <label>Phone Number</label>
              <input />
              <label>Comments or Inquiry</label>
              <textarea rows={8} />
              <span className="max-char">Max 320 characters</span>
              <div className="btn-block">
                <Button
                  width={"210px"}
                  height={"64px"}
                  background={"#ec6f00"}
                  color={"#fff"}
                  border={"none"}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="contactus-heading">Company Information</h1>
            <p className="contact-info-detail">
              <FontAwesomeIcon
                style={{ color: "#565656" }}
                icon={faLocationDot}
              />
              151 Ted Turner Drive NW <br /> Suite #5 <br /> Atlanta, GA 30303
            </p>
            <p className="contact-info-detail">
              <FontAwesomeIcon style={{ color: "#565656" }} icon={faPhone} />
              404.900.6900
            </p>
            <p className="contact-info-detail">
              <img src={telephone} alt="telephone" />
              404.937.6265
            </p>
            <p className="contact-info-detail">
              <FontAwesomeIcon
                style={{ color: "#565656" }}
                icon={faEarthAfrica}
              />
              www.sportsid.io
            </p>
          </div>
        </div>
        <div className="joinCampIdComponent">
          <JoinCampID />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

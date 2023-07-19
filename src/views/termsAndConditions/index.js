import React, { useState } from "react";
import Button from "../../components/button";
import "./termsAndConditions.scss";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader"


const TermsAndConditions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const [isChecked, setChecked] = useState(false);
  const [isLoading, setisLoading] = useState(false)

  const handleSubmit = () => {

    setisLoading(true);
    axios.put('/signup', { ...state }, {
      headers: {
        'x-api-key': "vR7dC0yfEH7VVKyCnEovf8JjvHBsmz3g8rkHExN7",
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then((data) => {
      console.log(data);
      setisLoading(false);
      navigate('/director/directorprofile');
    }).catch((e) => {
      setisLoading(false);
      console.log(e);
    })
  }

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <div>
        {/* <Header /> */}
        <div className="termsAndConditions">
          <div className="termsAndConditionsTopSection">
            <div>
              <p>
                Let’s get you some camps to signup for. <br />
                Review & Accept terms then visit your custom dashboard.
              </p>
            </div>
            <div className="confirmation">
              <h5>
                Your signup confirmation will be sent to your email address.{" "}
                <br />
                Please login with your selected credentials on your next visit.
              </h5>
            </div>
          </div>
          <div className="termsOfService">
            <div className="email">
              <p>{state.emailUsername}</p>
            </div>
            <div className="termsOfServiceContent">
              <h5>Terms of Service</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                congue quis nulla at aliquet. Fusce porttitor mi id tempus
                imperdiet. <br />
                <br />
                Maecenas commodo purus vitae nulla finibus elementum. Sed euismod
                nulla vitae semper dignissim. Morbi ornare, mi a tincidunt
                aliquam, sapien lectus tempor eros, et accumsan lacus diam a
                mauris. Maecenas placerat malesuada elit, id rhoncus justo
                fermentum eget.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                congue quis nulla at aliquet. Fusce porttitor mi id tempus
                imperdiet.
                <br />
                <br />
                Maecenas commodo purus vitae nulla finibus elementum. Sed euismod
                nulla vitae semper dignissim. Morbi ornare, mi a tincidunt
                aliquam, sapien lectus tempor eros, et accumsan lacus diam a
                mauris. Maecenas placerat malesuada elit, id rhoncus justo
                fermentum eget.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                congue quis nulla at aliquet. Fusce porttitor mi id tempus
                imperdiet.
                <br />
                <br />
                Maecenas commodo purus vitae nulla finibus elementum. Sed euismod
                nulla vitae semper dignissim. Morbi ornare, mi a tincidunt
                aliquam, sapien lectus tempor eros, et accumsan lacus diam a
                mauris. Maecenas placerat malesuada elit, id rhoncus justo
                fermentum eget. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                congue quis nulla at aliquet. Fusce porttitor mi id tempus
                imperdiet.
                <br />
                <br />
              </p>
            </div>
            <div className="agree">
              <input type="checkbox" checked={isChecked}
                onChange={() => setChecked(!isChecked)} />
              <p>I agree with the terms of service.</p>
            </div>
          </div>
          <div className="termsAndConditionButton">
            <Button background={"white"} width={"40%"} color="#ec6f00">
              Cancel
            </Button>
            <Button isDisabled={!isChecked} width={"40%"} onClick={async () => {
              await handleSubmit();
            }}>Visit Camp Dashboard</Button>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
};

export default TermsAndConditions;

import React, { useState } from "react";
import "./camps.scss";
import Button from "../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

import CampCard from "../../components/campCard";
import FeaturedCamps from "../../components/featuredCamps";
import { useNavigate } from "react-router-dom";
import DirectorSidebar from "../../components/directorSidebar";
import DirectorHeader from "../../components/directorHeader";
import { Pagination } from "@mui/material";

const Camps = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const getTogglestatus = (getVal) => {
    setToggleMenu(getVal);
  }

  return (
    <div className="campsMainDiv">
      <div className='directorSidebarDiv'>
        <DirectorSidebar />
      </div>
      <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
        {toggleMenu && <DirectorSidebar />}
      </div>

      <div className='directorRightSide'>
        <DirectorHeader getTogglestatus={getTogglestatus} />

        <FeaturedCamps />
        <div className="campsLeft">
          <div className="campTop">
            <div className="campTopLeft">
              <div className="yourCamps_postCamp">
                <div className="yourCamps">
                  <p>Displaying 0 of 0</p>
                  <h1>Your Camps</h1>
                </div>
                <div className="postCamp">
                  <Button
                    width="136px"
                    height="32px"
                    onClick={() => navigate("/director/postcamps")}
                    borderRadius='4px'
                  >
                    + Post Camp
                  </Button>

                </div>
              </div>
            </div>
            <div className="campTopRight">
              <p>Sort By</p>
              <select name="choice">
                <option value="first" selected>
                  Upcoming
                </option>
                <option value="second">First Value</option>
              </select>
            </div>
          </div>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
         
          <div className='pagination_container'>
            <div className='pagination_details'>
              Show Per Page <span className='selected'>5</span><span>10</span><span>15</span>
            </div>
            <Pagination count={50} color="primary" />
            <div></div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Camps;
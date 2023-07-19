import {
  AppBar,
  Box,
  Grid,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect, useState } from "react";
import Dropdown from "../../components/dropdown";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import userContext from "../useContext";
import CustomButton from '../../components/customButton/customButton'
import { faX } from "@fortawesome/free-solid-svg-icons";

export const sportsOpt = [
  { name: "Men’s Basketball", isComing: false },
  { name: "Women’s Basketball", isComing: false },
  { name: "Football", isComing: false },
  { name: "Soccer", isComing: false },
  { name: "Baseball", isComing: true },
  { name: "Field Hockey", isComing: true },
  { name: "Hockey", isComing: true },
  { name: "Mens Lacrosse", isComing: true },
  { name: "Womens Lacrosse", isComing: true },
  { name: "Swimming", isComing: true },
];

export const stateOpt = [
  { name: "AL", isComing: false },
  { name: "AK", isComing: false },
  { name: "AZ", isComing: false },
  { name: "AR", isComing: false },
  { name: "CA", isComing: false },
  { name: "CO", isComing: false },
  { name: "CT", isComing: false },
  { name: "DE", isComing: false },
  { name: "FL", isComing: false },
  { name: "GA", isComing: false },
  { name: "HI", isComing: false },
  { name: "ID", isComing: false },
];

const useStyles = makeStyles((theme) => ({
  topHeader: {
    height: "30px",
  },
  mdScreen: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  responsiveTabs: {
    height: "10vh",
    borderBottom: "solid 1px #696969",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ec6f00",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Cabin",
    fontWeight: 700,
    lineHeight: "22px",
  },
  responsiveTab: {
    backgroundColor: "#565656",
    height: "calc(100vh - 64px)",
    marginTop: '64px'
  },
  selectSports: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  selectState: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  search: {
    [theme.breakpoints.down("md")]: {
      width: "40%",
      left: "5%",
    },
  },
  drops_Search_Box: {
    padding: "10px 0",
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    width: "95%",
    marginTop: "64px"
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(-1);
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:767px)");
  const [selectSport, setSelectSport] = useState([])
  const [selectState, setSelectState] = useState([])

  if (toggleMenu) {
    document.body.style.removeProperty('overflow')
    document.body.setAttribute('style', 'overflow: hidden !important;');

  } else {
    document.body.style.overflow = "unset";
  }
  const [selectedValue, setSelectedValue] = useContext(userContext)

  return (
    <div>
      <AppBar sx={{ background: "#fff", position: "fixed", height: '64px' }}>
        <Toolbar>
          <div className="headerContainer">
            <div onClick={() => { navigate("/") }} className="brandNameDiv">
              <img className="brandName" src="/camp-id-logo.png" alt="CAMPID" />
            </div>

            {matches ? (
              <>
                <div className="headerTabs">
                  <div
                    onClick={() => {
                      setActiveTab(1);
                      navigate("/sports-page");
                    }}

                  >
                    <h1
                      className={
                        activeTab === 1
                          ? "headerTabActive"
                          : "unActiveHeaderTab"
                      }
                    >
                      Sports
                    </h1>
                  </div>
                  <div

                    onClick={() => {
                      setActiveTab(2);
                      navigate("/about");
                    }}
                  >
                    <h1
                      className={
                        activeTab === 2
                          ? "headerTabActive"
                          : "unActiveHeaderTab"
                      }
                    >
                      About
                    </h1>
                  </div>
                  <div

                    onClick={() => {
                      setActiveTab(3);
                      navigate("/resources");
                    }}
                  >
                    <h1
                      className={
                        activeTab === 3
                          ? "headerTabActive"
                          : "unActiveHeaderTab"
                      }
                    >
                      Resources
                    </h1>
                  </div>
                  <div

                    onClick={() => {
                      setActiveTab(4);
                      navigate("/contactus");
                    }}
                  >
                    <h1
                      className={
                        activeTab === 4
                          ? "headerTabActive"
                          : "unActiveHeaderTab"
                      }
                    >
                      Contact Us
                    </h1>
                  </div>
                </div>
                <div className="selectSports_dropdown">
                  <Dropdown
                    options={sportsOpt}
                    name='sports'
                    placeholder="Select Sports"
                    setSelectSport={setSelectSport}
                    setSelectedValue={setSelectedValue}
                    selectedValue={selectedValue}

                  />

                </div>
                <div className="selectState_dropdown">
                  <Dropdown
                    options={stateOpt}
                    placeholder="Select State"
                    name='state'
                    setSelectState={setSelectState}
                    setSelectedValue={setSelectedValue}
                    selectedValue={selectedValue}
                  />
                </div>
                <div className="headerSearch">
                  <Button width={'100%'} height={'100%'} borderRadius={'4px'}
                    onClick={() => navigate("/searchresults")}
                  >
                    Search
                  </Button>
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                {!toggleMenu ? (
                  <img src={"/menu.png"} alt="menu" />
                ) : (
                  <img src={"/close.png"} alt="close" />
                )}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {!matches && toggleMenu && (
        <Box>
          <Stack alignItems="center" className={classes.responsiveTab}>
            <Box className={classes.responsiveTabs} onClick={() => {
              setActiveTab(1);
              setToggleMenu(false)
              navigate("/sports-page");
            }}>Sports</Box>
            <Box className={classes.responsiveTabs} onClick={() => {
              setActiveTab(2);
              setToggleMenu(false)
              navigate("/about");
            }}>About Us</Box>
            <Box className={classes.responsiveTabs} onClick={() => {
              setActiveTab(3);
              setToggleMenu(false)
              navigate("/resources");
            }}>Resources</Box>
            <Box className={classes.responsiveTabs} onClick={() => {
              setActiveTab(4);
              setToggleMenu(false)
              navigate("/contactus");
            }}>Contact</Box>
          </Stack>
        </Box>
      )}

      {!matches && (
        <Box className={classes.drops_Search_Box}>
          <div className="responsiveDropdown1">
            <Dropdown
              className={classes.selectSports}
              options={sportsOpt}
              placeholder="Select Sports"
            />
          </div>
          <div className="responsiveDropdown2">
            <Dropdown
              className={classes.selectState}
              options={sportsOpt}
              placeholder="Select Sports"
            />
          </div>
          <div className="mobileSearch">
            <Button width={'100%'} height={'100%'}>
              Search
            </Button>
          </div>
        </Box>
      )}
      {/* <div className='campSearchSelected' >
        {selectedValue.map((_, i) => {
          return <CustomButton key={i} text={_} icon={faX} />
        })}
      </div> */}
    </div>
  );
};

export default Header;

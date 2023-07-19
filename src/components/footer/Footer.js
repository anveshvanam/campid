import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  footertitle: {
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "34px",
    color: "#FFFFFF",
  },
  footer: {    
    padding:'30px 0',
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexWrap: "wrap",
      padding:'30px 18px'

    }
  },
  
  lists: {
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFBA00",
  },
  contactDetail: {
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#FFBA00",
  },
  address: {
    color: "#b6b4b3",
    fontSize: "18px",
    paddingTop: "8px",
  },
  socialMedia: {
    background: "#2d2d2d",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    },
  copyright: {
    textAlign: "start",
    color: "white",
    fontSize:'14px !important'
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="footerDiv">
      <Stack
        direction={{ sm: "row" }}
        width={{ sm: "100%", md: "90%", lg: "80%" }}
        justifyContent="center"
        className={classes.footer}
      >
        <Box
          sx={{ width: { sm: "40%", md: "50%", lg: "20%" } }}
          className={classes.footerBox}
          mt={2}
        >
          <Typography
            className={classes.footertitle}
            sx={{ fontSize: { xs: "24px", md: "24px", lg: "28px" } }}
          >
            Recent News
          </Typography>
          <List className={classes.lists}>
            <ListItem sx={{ paddingLeft: "unset" }}>
              CampID Studies on Soccer Statistics
            </ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>
              5 Star Basketall Recruit Chooses to Play Overseas
            </ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>
              SportsID Verafiable Camp Ratings
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{ width: { sm: "40%", md: "50%", lg: "20%" } }}
          className={classes.footerBox}
          mt={2}
        >
          <Typography
            className={classes.footertitle}
            sx={{ fontSize: { xs: "24px", md: "24px", lg: "28px" } }}
          >
            Resources
          </Typography>
          <List className={classes.lists}>
            <ListItem sx={{ paddingLeft: "unset" }}>
              Choosing the Right Trainer
            </ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>
              Benefits of Referral Based Selections
            </ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>
              How To Gain Exposure
            </ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>
              Mixing Academincs with Athletics
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{ width: { sm: "40%", md: "50%", lg: "20%" } }}
          className={classes.footerBox}
          mt={2}
        >
          <Typography
            className={classes.footertitle}
            sx={{ fontSize: { xs: "24px", md: "24px", lg: "28px" } }}
          >
            CampID
          </Typography>
          <List className={classes.lists}>
            <ListItem sx={{ paddingLeft: "unset" }}>About Us</ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>Privacy Policy</ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>Terms of Use</ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>Contact</ListItem>
          </List>
        </Box>
        <Box
          sx={{ width: { sm: "40%", md: "50%", lg: "20%" } }}
          className={classes.footerBox}
          mt={2}
        >
          <Typography
            className={classes.footertitle}
            sx={{ fontSize: { xs: "24px", md: "24px", lg: "28px" } }}
          >
            Contact
          </Typography>
          <Typography className={classes.address}>
            Atlanta, GA, USA 151 Ted Turner Drive NW Suite #5 Atlanta, GA 30303
          </Typography>
          <List className={classes.contactDetail}>
            <ListItem sx={{ paddingLeft: "unset" }}>
              <img className="contactImg" src="/phone.png" alt="phone" />{" "}
              404.900.6900
            </ListItem>
            <ListItem sx={{ paddingLeft: "unset" }}>
              <img className="contactImg" src="/email.png" alt="email" />{" "}
              team@sportsid.io
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Box className={classes.socialMedia} sx={{height:{xs:'62px',md:'90px',xl:'124px'}}}>
        {/* <Stack direction={"row"} spacing={1}>
          <Box>
            <img src="/fb.png" height="30px" alt="facebook" />
          </Box>
          <Box>
            <img src="/insta.png" height="30px" alt="instagram" />
          </Box>
          <Box>
            <img src="/twitter.png" height="30px" alt="twitter" />
          </Box>
          <Box>
            <img src="/utube.png" height="30px" alt="youtube" />
          </Box>
        </Stack> */}
        <Typography className={classes.copyright}>
          Copyright 2019 SportsID, INC.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;

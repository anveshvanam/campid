import React from "react";
import "./addtoexistingcamp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import Button from "../../components/button";

const Addtoexistingcamp = () => {
  return (
    <div className="existingcamp-main">
      <div className="existingcamp-head-block">
        <div className="main-container">
          <h1>Add Camp Season to Existing Camp</h1>
        </div>
      </div>
      <div className="main-container existingcamp-form">
      <Grid container spacing={3}>
        <Grid item sm={3} xs={12}>
            <label>Select Existing Camp</label>
            <input type="input" />
          </Grid>
          
        </Grid>
        <div className="edit-img">
          <FontAwesomeIcon
            style={{ height: "48px" }}
            color={"#fff"}
            width={"48px"}
            icon={faEdit}
          />
          <p>Edit Camp Image</p>
        </div>
        <Grid container spacing={3}>
        <Grid item sm={2} xs={12}>
            <label>Camp Season</label>
            <input type="input" />
          </Grid>
          <Grid item sm={2} xs={12}>
            <label>Start Date</label>
            <input type="date" />
          </Grid>
          <Grid item sm={2} xs={12}>
            <label>End Date</label>
            <input type="date" />
          </Grid>
          <Grid item sm={2} xs={12}>
            <label>Registration Cost</label>
            <input type="input" />
          </Grid>
        </Grid>
        
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <label>Address</label>
            <input type="input" />
          </Grid>
          <Grid item sm={4} xs={12}>
            <label>Address 2 (Unit #, Suite, Building #)</label>
            <input type="input" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <label>City</label>
            <input type="input" />
          </Grid>
          <Grid item sm={2} xs={12}>
            <label>State</label>
            <input type="input" />
          </Grid>
          <Grid item sm={2} xs={12}>
            <label>Zip Code</label>
            <input type="input" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <label>Skill Level</label>
            <input type="input" />
          </Grid>
          <Grid item sm={4} xs={12}>
            <label>Years of Experience</label>
            <input type="input" />
          </Grid>
        </Grid>
        <Grid container spacing={3} marginTop="137px" marginBottom="137px">
          <Grid item sm={4} xs={12}>
            <Button
              width={"100%"}
              height={"64px"}
              background={"#fff"}
              color={"#ec6f00"}
              border={"1px solid #ec6f00"}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Button
              width={"100%"}
              height={"64px"}
              background={"#ec6f00"}
              color={"#fff"}
              border={"none"}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Addtoexistingcamp;

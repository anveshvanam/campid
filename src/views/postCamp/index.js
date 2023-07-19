import React from "react";
import "./postCamp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCirclePlus, faDeleteLeft, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import Button from "../../components/button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PostCamps = () => {
  const [addSession, setAddSession] = useState(false)

  const location = useLocation()
  const { title = 'Post Camp' } = location.state || {}
  return (
    <div className="postcamp-main">
      <div className="postcamp-head-block">
        <div className="postcamp-head-block-title">
          <h1>{title}</h1>
        </div>
        <div className="cancelIcon">
          <FontAwesomeIcon icon={faRemove} />
        </div>
      </div>
      <div className="main-container postcamp-form">
        <div className="upload-img">
          <FontAwesomeIcon
            style={{ height: "24px" }}
            color={"#fff"}
            width={"48px"}
            icon={faCirclePlus}
          />
          <p>Upload Camp Image</p>
        </div>
        <div className='postForm'>
          <Grid container spacing={3}>
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
            <Grid item sm={5} xs={12}>
              <label>Camp Name</label>
              <input type="input" />
            </Grid>
            <Grid item sm={5} xs={12}>
              <label>Sport</label>
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
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} className='additionalSessions'>
            <h1>
              Are there additional sessions or camp seasons?
            </h1>
            <h2>
              Additional camp pages will be created from this camp title.
            </h2>
            {!addSession && <p onClick={() => setAddSession(!addSession)}>+ Add session</p>}
          </Grid>
        </Grid>
        {addSession &&
          <div className="addSessionMain">
            <div className="arrowDownIcon">
              <div>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
            <div className="addSessionDiv">
              <Grid container spacing={1}>
                <Grid item sm={5} xs={12} className='sessionName'>
                  <label>What’s the name of this session?</label>
                  <input type="input" />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
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
                <Grid item sm={4} xs={12} className='dlt_session'>
                  <FontAwesomeIcon icon={faTrash} color='#EC6F00' />

                  <h1>Delete Session</h1>

                </Grid>

              </Grid>

            </div>
            <p onClick={() => setAddSession(!addSession)} className='addSession'>+ Add session</p>

          </div>

        }
        <Grid container spacing={3} marginTop="137px" marginBottom="137px" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
          <Grid item >
            <Button
              width={"173px"}
              height={"40px"}
              background={"#fff"}
              color={"#ec6f00"}
              borderRadius={"4px"}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item >
            <Button
              width={"173px"}
              height={"40px"}
              background={"#ec6f00"}
              color={"#fff"}
              borderRadius={"4px"}
            >
              Save Camp
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default PostCamps;

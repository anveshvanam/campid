import React, { useState } from 'react'
import './directorViewCamp.scss'
import star from '../../assets/images/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCalendar, faDollar, faLocation, faMessage, faPhone, faStar, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/button'
import DirectorSidebar from '../../components/directorSidebar'
import DirectorHeader from '../../components/directorHeader'
import Reviews from '../../components/reviews'
import { Grid } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const DirectorViewCamp = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const getTogglestatus = (getVal) => {
        setToggleMenu(getVal);
    }

    const navigate = useNavigate()

    return (
        <div className='directorViewCamp'>
            <div className='directorSidebarDiv'>
                <DirectorSidebar />
            </div>
            <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
                {toggleMenu && <DirectorSidebar />}
            </div>
            <div className='directorRightSide'>
                <DirectorHeader getTogglestatus={getTogglestatus} />
                <div className='campDetails'>
                    <div className='campDetails_registration'>
                        <div className='campDetails_left'>
                            <div className='status'>
                                <Button  height='34px' background='#07af1b' borderRadius='8px' onClick={()=>navigate('/director/registeredmembers')}>Registered <span >51</span></Button>
                                <Button  height='34px' background='#ffba00' borderRadius='0 8px 8px 0' onClick={()=>navigate('/director/registeredmembers')}>Pending <span >51</span></Button>
                                <Button  height='34px' background='#b6b4b3' borderRadius='0 8px 8px 0' onClick={()=>navigate('/director/registeredmembers')}>Waitlist <span >51</span></Button>
                            </div>
                            <div className='ratings'>
                                <h1>4.5</h1>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p>Summer Session</p>
                            <h1 className='campTitle'>UCONN Women’s Basketball Camp</h1>
                            <Grid container spacing={3} className='save_visitCamp'>
                                <Grid item  className='save'>
                                    <FontAwesomeIcon icon={faBookmark} color="#EC6F00" />
                                    <p>Save</p>
                                </Grid>
                                <Grid item ><h1>Visit Camp Website</h1></Grid>
                            </Grid>
                            <Grid container spacing={5} className='data_location_price'>
                                <Grid item  className='date'>
                                    <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faCalendar} />
                                    <p>Jul 10 - 15 2019</p>
                                </Grid>
                                <Grid item  className='location'>
                                    <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faLocation} />
                                    <p>Atlanta, GA</p>
                                </Grid>
                                <Grid item  className='price'>
                                    <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faDollar} />
                                    <p>150.00</p>
                                </Grid>

                            </Grid>
                            <Grid container spacing={5} className='campType_details'>
                                <Grid item >
                                    <h1>Camp Type</h1>
                                    <h2>Women’s Basketball</h2>
                                </Grid>
                                <Grid item  >
                                    <h1>Skill Level</h1>
                                    <h2>Elite</h2>
                                </Grid>
                                <Grid item  >
                                    <h1>Session</h1>
                                    <h2>Summer</h2>
                                </Grid>
                                <Grid item  m>
                                    <h1>Age</h1>
                                    <h2>11 - 13</h2>
                                </Grid>

                            </Grid>
                        </div>
                        <div className='campDetails_right'>
                            <p>10 new registrations</p>
                            <h1>$150.00</h1>
                            <Button width='95%' height='40px' borderRadius='4px' onClick={()=>navigate('/director/postcamps', {state:{title:'Edit Camp'}})}>Edit Camp</Button>
                        </div>
                    </div>  
                    <div className='campDescription'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                            congue quis nulla at aliquet. Fusce porttitor mi id tempus
                            imperdiet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                            congue quis nulla at aliquet. Fusce porttitor mi id tempus
                            imperdiet. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                            congue quis nulla at aliquet. Fusce porttitor mi id tempus
                            imperdiet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                            congue quis nulla at aliquet. Fusce porttitor mi id tempus
                            imperdiet. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                            congue quis nulla at aliquet. Fusce porttitor mi id tempus
                            imperdiet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            metus nisi, tempus vitae leo vel, tristique euismod leo. Sed
                            congue quis nulla at aliquet. Fusce porttitor mi id tempus
                            imperdiet. <br /><br />

                        </p>
                    </div>
                    <div className='campsImagesDiv'>
                        <div className='campsImages'>
                            <div>
                                <img src="/Rectangle (3).png" alt="" />
                            </div>
                            <div>
                                <img src="/Rectangle (2).png" alt="" />

                            </div>
                            <div>
                                <img src="/Rectangle (1).png" alt="" />

                            </div>
                            <div>
                                <img src="/Rectangle.png" alt="" />

                            </div>
                        </div>
                        <Button
                            width={"176px"}
                            height={"40px"}
                            color={"#ec6f00"}
                            background={"#fff"}
                            border={"1px solid #ec6f00"}
                            borderRadius= '4px'
                        >
                            View all images
                        </Button>
                    </div>
                </div>
                <Grid container className='contact_map_Container' justifyContent='space-between'>
                    <Grid item xs={12} sm={6} md={5} className='contact'>
                        <h1>Contact</h1>
                        <h2>Gampel Pavilion</h2>
                        <h3>2098 Hillside Rd <br /> Storrs, CT 06268</h3>
                        <h4><FontAwesomeIcon color='#EC6F00' icon={faPhone} />  404.123.4567</h4>
                        <h4><FontAwesomeIcon color='#EC6F00' icon={faMessage} />  info@camplink.com</h4>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} className='map'>
                        <div>
                            <img src="/camp-map-img.png" alt="" />
                        </div>
                    </Grid>

                </Grid>
                <Grid container className='postReview_Reviews_Container' justifyContent='space-between' >
                    <Grid item xs={12} lg={5} md={12} className='postReview'>
                        <h1>Rate & Review Camp</h1>
                        <textarea rows="6" name="comment" form="usrform">
                            Enter text here...</textarea>
                        <Grid container className='reviewList'>
                            <Grid item xs={12} sm={8}>
                                <h1>Facilities</h1>
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <h1>Schedule</h1>
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <h1>Staff</h1>
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <h1>Competitiveness</h1>
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                                <FontAwesomeIcon color='#EC6F00' icon={faStar} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} className='submitReview'>
                            <Button width={'208px'} height={'40px'} borderRadius={'4px'}>Submit Review</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}  lg={5} md={12} className='reviewsDiv'>
                        <Reviews />
                        <Reviews />
                        <Reviews />
                    </Grid>
                </Grid>
            </div>


        </div>
    )
}

export default DirectorViewCamp
import React, { useState } from 'react'
import './athleteProfile.scss'
import DirectorSidebar from '../../components/directorSidebar'
import DirectorHeader from '../../components/directorHeader'
import { Grid } from '@mui/material'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faFileEdit, faGreaterThan, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const AthleteProfile = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [edit, setEdit] = useState(false);

    const getTogglestatus = (getVal) => {
        setToggleMenu(getVal);
    }

    const navigate = useNavigate()

    return (
        <div className='athleteProfile'>
            <div className='directSidebar'>
                <DirectorSidebar />
            </div>
            <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
                {toggleMenu && <DirectorSidebar />}
            </div>
            <div className='directorHead_rightside'>
                <DirectorHeader getTogglestatus={getTogglestatus} />
                <div className='profileContent'>
                    <Grid container>
                        <Grid item container xs={6} className='profilePicDivMain'>
                            <Grid item className='profilePicDiv'>
                                <div className='profilePicImg'>
                                    <img src='https://www.indiafilings.com/learn/wp-content/uploads/2018/03/Additional-Director.jpg' />
                                </div>
                                <div >
                                    <FontAwesomeIcon icon={faEdit} />
                                    <p>Change picture</p>
                                </div>
                            </Grid>
                            <Grid item className='profileName'>
                                <h1>Atlanta, GA</h1>
                                <h2>James Washington</h2>
                                <h3>Elite Sports Camps</h3>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className='password_account'>
                            <Button background='white' color='#EC6F00' borderRadius='4px' height='40px' width='173px'>Delete account</Button>
                            <Button borderRadius='4px' width='173px' height='40px'>Change password</Button>

                        </Grid>
                    </Grid>
                    <Grid container marginTop={{ xl: '40px', md: '20px', xs: '10px' }} gap={'10px'}>
                        <Grid className='details'><p>Details</p></Grid>
                        <Grid display='flex' alignItems='center' className='edit' onClick={() => setEdit(!edit)}>
                            <FontAwesomeIcon icon={faEdit} color='#EC6F00' />
                            <p>Edit</p>
                        </Grid>

                    </Grid>
                    <Grid container spacing={3} marginTop={{ xl: '35px', md: '20px', xs: '10px' }}>
                        <Grid item sm={6} md={5} xs={12}>
                            <label>Email</label>
                            {!edit ? <p style={{ wordWrap: 'break-word' }}>james.washington@elitesports.com</p> :
                                <input type='input' value='james.washington@elitesports.com' />}
                        </Grid>
                        <Grid item sm={3} md={3} xs={12}>
                            <label>Phone</label>

                            {!edit ? <p>404.123.4567</p> :
                                <input type='input' value='404.123.4567' />}

                        </Grid>
                    </Grid>
                    <Grid container spacing={3} marginTop={{ xl: '25px', md: '15px', xs: '10px' }}>
                        <Grid item sm={6} md={5} xs={12}>
                            <label>Height</label>
                            {!edit ? <p>5’9”</p> :
                                <input type='input' value='5’9”' />}
                        </Grid>
                        <Grid item sm={3} md={3} xs={12}>
                            <label>Weight</label>

                            {!edit ? <p>115lb</p> :
                                <input type='input' value='115lb' />}

                        </Grid>
                    </Grid>
                    <Grid container spacing={2} marginTop={{ xl: '25px', md: '15px', xs: '10px' }}>
                        <Grid item sm={3} xs={12}><label>Primary Sport</label>
                            {!edit ? <p>Women’s Basketball</p> :
                                <input type='input' value='Women’s Basketball' />}
                        </Grid>

                        <Grid item sm={3} xs={12}><label>Primary Sport Level</label>

                            {!edit ? <p>Elite</p> :
                                <input type='input' value='Elite' />}
                        </Grid>
                        <Grid item sm={3} xs={12}><label>Secondary Sport</label>
                            {!edit ? <p>Women’s Lacrosse</p> :
                                <input type='input' value='Women’s Lacrosse' />}
                        </Grid>
                        <Grid item sm={3} xs={12}><label>Secondary Sport Level</label>
                            {!edit ? <p>Novice</p> :
                                <input type='input' value='Novice' />}
                        </Grid>
                    </Grid>
                    <Grid container marginTop={{ xl: '25px', md: '15px', xs: '10px' }}>
                        <Grid item xs={12}>
                            <label>Bio</label>

                            {!edit ? <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit quam id ante lobortis, et tempus massa efficitur. Nunc gravida tincidunt convallis. Praesent rutrum varius urna in pellentesque. Proin ut nisi non ipsum aliquam ultricies. Aliquam diam arcu, volutpat non auctor at, faucibus et nunc. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit quam id ante lobortis, et tempus massa efficitur. Nunc gravida tincidunt convallis. Praesent rutrum varius urna in pellentesque. Proin ut nisi non ipsum aliquam ultricies. Aliquam diam arcu, volutpat non auctor at, faucibus et nunc.
                            </p> :
                                <textarea rows='6' value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit quam id ante lobortis, et tempus massa efficitur. Nunc gravida tincidunt convallis. Praesent rutrum varius urna in pellentesque. Proin ut nisi non ipsum aliquam ultricies. Aliquam diam arcu, volutpat non auctor at, faucibus et nunc. <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit quam id ante lobortis, et tempus massa efficitur. Nunc gravida tincidunt convallis. Praesent rutrum varius urna in pellentesque. Proin ut nisi non ipsum aliquam ultricies. Aliquam diam arcu, volutpat non auctor at, faucibus et nunc.' />}

                        </Grid>
                    </Grid>
                    <Grid container marginTop='70px' gap={'10px'}>
                        <Grid item className='details'><p>Parents/Guardians</p></Grid>
                        <Grid display='flex' alignItems='center' className='edit' onClick={() => setEdit(!edit)}>
                            <FontAwesomeIcon icon={faAdd} color='#EC6F00' />
                            <p>Add parent</p>
                        </Grid>

                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item container className='parentProfile'>
                            <Grid item className='imageDiv' onClick={() => navigate('/athlete/parentguardians', { state: { CampTtitle: '<Parent/Guardians' } })}>
                                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Fthe-gentlemen-2000.jpg" alt="" />
                            </Grid>
                            <Grid item className='profile'>
                                <h1>Justin Smith</h1>
                                <p>justin.smith@gmail.com</p>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid container marginTop={{ xl: '70px', md: '40px', xs: '20px' }} gap={'10px'}>
                        <Grid item className='details'><p>Gallery</p></Grid>
                        <Grid display='flex' alignItems='center' className='edit' onClick={() => navigate('/athlete/addalbum')}>
                            <FontAwesomeIcon icon={faAdd} color='#EC6F00' />
                            <p>Add album</p>
                        </Grid>

                    </Grid>
                    <Grid container className='gallery' direction={'column'}>
                        <Grid item className='imageDiv'>
                            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Fthe-gentlemen-2000.jpg" alt="" />
                        </Grid>
                        <Grid item className='galleryDescription'>
                            <p>Summer 2018 Highlights from UCONN Camp</p>
                        </Grid>
                    </Grid>
                    {edit && <Grid container spacing={2} marginTop='30px' className='save_cancel_btn'>
                        <Grid item>
                            <Button background='white' height='40px' width='173px' color='#EC6F00' borderRadius='4px' >Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button width='173px' height='40px' borderRadius='4px'>Save Details</Button>
                        </Grid>
                    </Grid>}
                    <div className='security'>
                        <h1>
                            Security
                        </h1>
                        <div className='lastLogIn'>
                            <h1>iPhone Pro 13</h1>
                            <div>
                                <h2>last login Jan 10 2023</h2>
                                <h3>logout</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default AthleteProfile
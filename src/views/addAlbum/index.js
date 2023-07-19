import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, Grid } from '@mui/material'
import React, { useState } from 'react'
import Button from '../../components/button'
import DirectorHeader from '../../components/directorHeader'
import DirectorSidebar from '../../components/directorSidebar'
import './addAlbum.scss'

const AddAlbum = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [edit, setEdit] = useState(false);

    const getTogglestatus = (getVal) => {
        setToggleMenu(getVal);
    }


    return (
        <div className='addAlbumMain'>
            <div className='directSidebar'>
                <DirectorSidebar />
            </div>
            <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
                {toggleMenu && <DirectorSidebar />}
            </div>
            <div className='addAlbumRightSide'>
                <DirectorHeader getTogglestatus={getTogglestatus} />

                <div className='addAlbumRightSideContent'>
                    <Grid container className='addAlbumTop'>

                        <Grid item xs={12} sm={6}>
                            <h1>Name</h1>
                            <p>Summer 2018 Highlights from UCONN camp</p>
                        </Grid>
                        <Grid item container xs={12} sm={6} spacing={2} className='addAlbumButton'>
                            {!edit && <Grid item xs={6}>
                                <Button borderRadius='4px' height='40px' width='100%' onClick={() => setEdit(!edit)}>Edit</Button>
                            </Grid>}
                            <Grid item xs={6}>
                                <Button borderRadius='4px' height='40px' width='100%' color='#EC6F00' background='white'>{!edit ? 'Delete Album' : 'Cancel'}</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className="upload-img" >
                        <FontAwesomeIcon
                            style={{ height: "48px" }}
                            color={"#fff"}
                            width={"48px"}
                            icon={faCirclePlus}
                        />
                        <p>Drag & drop Images or click to upload</p>
                    </div>
                    <Grid container className='imageCollections' spacing={2}>
                    <Grid item sm={3} xs={6} className='imageDiv'>
                            <img src="https://cdn.nba.com/manage/2023/02/kyrie-irving-ft-iso.jpg" alt="" />
                            {edit &&
                                <div className='imageCheckbox'>
                                    <label class="checkbox">
                                        <input type="checkbox" class="checkbox__input" />
                                        <span class="checkbox__inner"></span>
                                    </label>
                                </div>}
                        </Grid>
                        <Grid item sm={3} xs={6} className='imageDiv'>
                            <img src="https://cdn.nba.com/manage/2023/02/kyrie-irving-ft-iso.jpg" alt="" />
                            {edit &&
                                <div className='imageCheckbox'>
                                    <label class="checkbox">
                                        <input type="checkbox" class="checkbox__input" />
                                        <span class="checkbox__inner"></span>
                                    </label>
                                </div>}
                        </Grid>
                        <Grid item sm={3} xs={6} className='imageDiv'>
                            <img src="https://cdn.nba.com/manage/2023/02/kyrie-irving-ft-iso.jpg" alt="" />
                            {edit &&
                                <div className='imageCheckbox'>
                                    <label class="checkbox">
                                        <input type="checkbox" class="checkbox__input" />
                                        <span class="checkbox__inner"></span>
                                    </label>
                                </div>}
                        </Grid>
                        <Grid item sm={3} xs={6} className='imageDiv'>
                            <img src="https://cdn.nba.com/manage/2023/02/kyrie-irving-ft-iso.jpg" alt="" />
                            {edit &&
                                <div className='imageCheckbox'>
                                    <label class="checkbox">
                                        <input type="checkbox" class="checkbox__input" />
                                        <span class="checkbox__inner"></span>
                                    </label>
                                </div>}
                        </Grid>
                        <Grid item sm={3} xs={6} className='imageDiv'>
                            <img src="https://cdn.nba.com/manage/2023/02/kyrie-irving-ft-iso.jpg" alt="" />
                            {edit &&
                                <div className='imageCheckbox'>
                                    <label class="checkbox">
                                        <input type="checkbox" class="checkbox__input" />
                                        <span class="checkbox__inner"></span>
                                    </label>
                                </div>}
                        </Grid>
                        <Grid item sm={3} xs={6} className='imageDiv'>
                            <img src="https://cdn.nba.com/manage/2023/02/kyrie-irving-ft-iso.jpg" alt="" />
                            {edit &&
                                <div className='imageCheckbox'>
                                    <label class="checkbox">
                                        <input type="checkbox" class="checkbox__input" />
                                        <span class="checkbox__inner"></span>
                                    </label>
                                </div>}
                        </Grid>
                    </Grid>
                    {edit && <Grid container xs={12} sm={6} spacing={2} className='deleteSaveButton' >
                        <Grid item xs={6}>
                            <Button borderRadius='4px' height='40px' width='100%' color='#EC6F00' background='white'>Delete selected</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button borderRadius='4px' height='40px' width='100%' >Save album</Button>
                        </Grid>

                    </Grid>}
                </div>
            </div>
        </div>
    )
}

export default AddAlbum
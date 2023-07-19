import { Grid } from '@mui/material';
import React, { useState } from 'react'
import Button from '../../components/button';
import DirectorHeader from '../../components/directorHeader';
import DirectorSidebar from '../../components/directorSidebar'
import './parentGuardians.scss'

const ParentGuardians = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const getTogglestatus = (getVal) => {
        setToggleMenu(getVal);
    }
    return (
        <div className='parentGuardians'>
            <div className='directSidebar'>
                <DirectorSidebar />
            </div>
            <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
                {toggleMenu && <DirectorSidebar />}
            </div>
            <div className='parentGuardians_rightside'>
                <DirectorHeader getTogglestatus={getTogglestatus} />

                <div className='parentGuardians_content'>
                    <Grid container spacing={3} justifyContent='space-between'>
                        <Grid item container xs={6} sm={4} className='parentProfile'>
                            <Grid item xs={3} className='imageDiv'>
                                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Fthe-gentlemen-2000.jpg" alt="" />
                            </Grid>
                            <Grid item xs={8} className='profile'>
                                <h1>Justin Smith</h1>
                                <p>justin.smith@gmail.com</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Button width='100%' height='40px' borderRadius='4px'>Remove</Button>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ParentGuardians
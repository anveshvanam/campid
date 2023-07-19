import { AppBar, Box, Stack, Toolbar, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import clipboard from "../../assets/images/icon-clipboard.png";
import './campDirectorHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faNewspaper, faRegistered, faContactCard, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

    responsiveTabs: {
        height: '10vh',
        borderBottom: 'solid 1px #696969',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ec6f00',
        fontSize: '18px',
        fontWeight: 'bold',
        gap: '10px'
    },
    responsiveTab: {
        backgroundColor: '#565656',
        height: '100vh'
    },
    menuTitle: {
        
    marginBlockStart: 'unset',
    marginBlockEnd:'unset',
    fontSize:'18px'

    }
}));
const CampDirectorHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const classes = useStyles()

    const matches = useMediaQuery('(min-width:787px)');
    console.log(matches);

    return (
        <div>
            <div className='campDirectorHeader'>
                <div className='logo_Menu'>
                    <div className='logo'>
                        <img className='brandName' src="/camp-id-logo.png" alt="CAMPID" />
                    </div>
                    {matches && <div className='menu'>
                        <div className='menuItems'>
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faClipboardList} />
                            <h1>Your Camps</h1>
                        </div>
                        <div className='menuItems'>
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faRegistered} />
                            <h1>Pending Registrations</h1>
                        </div>
                        <div className='menuItems'>
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faSearch} />
                            <h1>Search Camps</h1>

                        </div>
                        <div className='menuItems'>
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faNewspaper} />
                            <h1>News</h1>

                        </div>
                        <div className='menuItems'>
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faContactCard} />
                            <h1>Resources</h1>

                        </div>

                    </div>}

                </div>
                <div className='user'>
                    <div className='userName'>
                        <h1>Gino Auriemma</h1>
                        <h2 style={{ color: '#565656' }}>Camp Director</h2>
                    </div>
                    <div className='avatar'>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316605.png" alt="" />
                    </div >
                    {!matches && <div className='toggleMenu' onClick={() => { setToggleMenu(!toggleMenu) }}>
                        {!toggleMenu ? <img src={'/menu.png'} /> : <img src={'/close.png'} />}
                    </div>}
                </div>
            </div>
            {!matches && toggleMenu && <Box>
                <Stack alignItems='center' className={classes.responsiveTab}>
                    <Box className={classes.responsiveTabs}>
                        <FontAwesomeIcon style={{ color: "#ec6f00", height: '18px' }} icon={faClipboardList} />
                        <h1 className={classes.menuTitle}>Your Camps</h1>
                    </Box>
                    <Box className={classes.responsiveTabs}>
                        <FontAwesomeIcon style={{ color: "#ec6f00", height: '18px' }} icon={faRegistered} />
                        <h1 className={classes.menuTitle}>Pending Registrations</h1>
                    </Box>
                    <Box className={classes.responsiveTabs}>
                        <FontAwesomeIcon style={{ color: "#ec6f00", height: '18px' }} icon={faRegistered} />
                        <h1 className={classes.menuTitle}>Pending Registrations</h1>
                    </Box>
                    <Box className={classes.responsiveTabs}>
                        <FontAwesomeIcon style={{ color: "#ec6f00", height: '18px' }} icon={faNewspaper} />
                        <h1 className={classes.menuTitle}>News</h1>

                    </Box>
                    <Box className={classes.responsiveTabs}>
                        <FontAwesomeIcon style={{ color: "#ec6f00", height: '18px' }} icon={faContactCard} />
                        <h1 className={classes.menuTitle}>Resources</h1>

                    </Box>
                </Stack>
            </Box>}
        </div>
    )
}

export default CampDirectorHeader
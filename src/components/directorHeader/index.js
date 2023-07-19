import React, { useState } from 'react'
import './directorHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSave, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'

const DirectorHeader = ({ getTogglestatus }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation()
  getTogglestatus(toggleMenu)

  const matches = useMediaQuery("(max-width:767px)");
  const { title = 'Camps' } = location.state || {}
  const { campTitle} = location.state || {}
  
  if (toggleMenu) {
    document.body.style.removeProperty('overflow')
    document.body.setAttribute ('style', 'overflow: hidden !important;');

  }else{
    document.body.style.overflow = "unset";
  }
  return (

    <div className='directorHeader'>
      <div className='title'>
      <h2 >{title}</h2>

        {campTitle && <h1>{campTitle} </h1>}

      </div>
      <div className='icons'>
        <img src="/icon-nav-notifications.png" alt="notification" />
        <img src="/icon-nav-bookmark.png" alt="bookmark" />
        <img src="/icon-nav-calendar.png" alt="calendar" />

        {matches &&
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
        }

      </div>
    </div>


  )
}

export default DirectorHeader
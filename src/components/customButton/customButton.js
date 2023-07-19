import React from 'react'
import './customButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const customButton = ({ text, icon, onclick }) => {
  return (
    <div className='custom_button' >
            {text}
            <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} icon={icon} />
        </div>
  )
}

export default customButton
import React from 'react'
import './campCard.scss'
import star from '../../assets/images/star.png'
import Button from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocation, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CampCard = () => {

    const score = 'shdskdjsdkjs'
    const rating = 4.5;
    const navigate = useNavigate()

    return (
        <div className='campCard'>

            <div className='profilePic'>
                <img src="/campImg.png" alt="" />
            </div>
            <div className='profileDetails'>
                <h1 onClick={() => navigate('/director/viewcamp', { state: { campTitle: '>University of Georgia Summer' } })}>University of Georgia Summer Camp</h1>
                <div className='ratings'>
                    <h1>4.5</h1>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </div>
                <div className='data_location_price'>
                    <div className='date'>
                        <FontAwesomeIcon style={{ color: "rgba(182, 180, 179, 1)" }} icon={faCalendar} />
                        <p>Jul 10 - 15 2019</p>
                    </div>
                    <div className='location'>
                        <FontAwesomeIcon style={{ color: "rgba(182, 180, 179, 1)" }} icon={faLocation} />
                        <p>Atlanta, GA</p>
                    </div>
                    <div className='price'>
                        <FontAwesomeIcon style={{ color: "rgba(182, 180, 179, 1)" }} icon={faDollar} />
                        <p>150.00</p>
                    </div>

                </div>
                <div className='list'>
                    <p>W Basketball</p>
                    <p>Summer 2019</p>
                    <p>GA</p>
                </div>
                <div className='status'>
                    <Button  height='34px' background='#07af1b' borderRadius='8px'>Registered <span >51</span></Button>
                    <Button  height='34px' background='#ffba00' borderRadius='0 8px 8px 0'>Pending <span >51</span></Button>
                    <Button  height='34px' background='#b6b4b3' borderRadius='0 8px 8px 0'>Waitlist <span>51</span></Button>
                </div>
            </div>

        </div>
    )
}

export default CampCard
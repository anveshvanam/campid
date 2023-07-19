import React from 'react'
import './featuredCamps.scss'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'

const FeaturedCamps = () => {
    return (
        <div className='featuredCamps'>
            <div className='featuredCampsTitle'>
                <h1>Featured Camps</h1>
                <div className='circle'>
                    <div>
                        <img src="/left-pagination.png" alt="" />
                    </div>
                    <div>
                        <img src="/right-pagination.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='featuredCampsList'>
                <div className='featuredCampsListDiv'>
                    <div>
                        <img src="/Rectangle 3.png" alt="" />
                    </div>
                    <h1>All American Skills Development</h1>
                    <p>Atlanta, GA</p>
                </div>
                <div className='featuredCampsListDiv'>
                    <div><img src="/Rectangle 3.png" alt="" /></div>
                    <h1>All American Skills Development</h1>
                    <p>Atlanta, GA</p>
                </div>
                <div className='featuredCampsListDiv'>
                    <div><img src="/Rectangle 3 (1).png" alt="" /></div>
                    <h1>All American Skills Development</h1>
                    <p>Atlanta, GA</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCamps
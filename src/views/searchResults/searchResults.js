import { Pagination } from '@mui/material'
import React from 'react'
import CampCard from '../../components/campCard'
import Dropdown from '../../components/dropdown'
import { stateOpt } from '../../components/header/Header'
import './searchResults.scss'
import JoinCampID from '../../components/joinCampID/index'
const searchResults = () => {
    return (
        <div className='searchResults'>
            <div className='searchResultsDiv'>
            <div className='content_info'>Displaying 5 of 100</div>
            <div className='search_filter_container'>
                <div className='search_filter_container_title' >Search Result</div>
                <div className='sortingMain'>
                    <div className="sorting">
                        <p>Sort By</p>
                        {/* <select name="choice">
                                         <option value="first" selected>
                                             Upcoming
                                         </option>
                                         <option value="second">First Value</option>
                                     </select> */}

                        <Dropdown
                            handleChange={() => null}
                            options={stateOpt}
                            width={'9rem'}
                            placeholder="Upcoming"
                        />

                    </div>
                </div>
            </div>
            <div className='result_cards'>

                <CampCard />
                <CampCard />
                <CampCard />
                <div className='pagination_container'>
                    <div className='pagination_details'>
                        Show Per Page <span className='selected'>5</span><span>10</span><span>15</span>
                    </div>
                    <Pagination count={50} color="primary" />
                    <div></div>
                </div>
            </div>
            <div className='join_camp_id'>
                <JoinCampID/>
            </div>
            </div>

        </div>
    )
}

export default searchResults
import React from 'react'
import './savedSearchFilter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SavedSearchFilter = () => {
    return (
        <div>

            <div className='saved'>

                <div>
                    <FontAwesomeIcon  icon={faBookmark} />
                    <h1>Saved Camps</h1>
                </div>
                <p>Search Camps &gt; </p>
            </div>
            <div className='search'>
                <h1>Search by Sport</h1>
                <ul>
                    <li>Baseball</li>
                    <li>Men’s Basketball</li>
                    <li>Women’s Basketball</li>
                    <li>Football</li>
                    <li>Soccer</li>

                </ul>
            </div>
            <div className='filter'>
                <h1>Filter All Camps by Region</h1>
                <ul>
                    <li>Northeast</li>
                    <li>Southeast</li>
                    <li>Midwest</li>
                    <li>West</li>
                </ul>
            </div>

        </div>
    )
}

export default SavedSearchFilter
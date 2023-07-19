import React, { useContext, useEffect, useState } from 'react'
import './directorSidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faFile, faSearch, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../../store/UserContext';


const DirectorSidebar = () => {
    const [activeMenu, setActiveMenu] = useState()
    const { user } = useContext(UserContext);
    const UserTitle = Object.freeze({ 1: "Dirctor", 2: "Parent", 3: "Athlete" });

    useEffect(() => {

    }, [user])

    //enum in javascript ?



    return (
        <div className='directorSidebar'>
            <div className='directorProfile'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-37G4I82blmnrYtvyEEE0aMli98LdL7aPOZb0RZ5aNisbK8m6UrwnTBGUqPnCgMAoYM&usqp=CAU" alt="" />
                </div>
                <Link to="/director/directorprofile" state={{ title: 'Profile' }}>
                    <h1>{user.nameFirst + " " + user.nameLast}</h1>
                </Link>
                <h2>{user.accountType === 'campOwner' ? UserTitle[1] : user.accountType === 'Parent' ? UserTitle[2] : UserTitle[3]}</h2>
                <h3>{user.companyName}</h3>
            </div>
            <div className='sidebarMenuMain'>
                <div className='sidebarMenu'>
                    <div>
                        <NavLink to="/director/camps"
                            state={{ title: 'Camps' }}
                            activeClassName='active'>
                            <FontAwesomeIcon style={{ color: "#565656" }} icon={faHome} />
                            <h1> Camps</h1>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/director/searchcamp"
                            state={{ title: 'Find a Camp' }}
                            activeClassName='active'>
                            <FontAwesomeIcon style={{ color: "#565656" }} icon={faSearch} />
                            <h1>Find a Camp</h1>
                        </NavLink>

                    </div>
                    <div>
                        <FontAwesomeIcon style={{ color: "#565656" }} icon={faNewspaper} />
                        <h1>
                            News
                        </h1>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ color: "#565656" }} icon={faFile} />
                        <h1>
                            Resources
                        </h1>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ color: "#565656" }} icon={faFilePdf} />
                        <h1>
                            Documents
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DirectorSidebar
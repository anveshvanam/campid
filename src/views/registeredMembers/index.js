import React, { useState } from 'react'
import './registeredMembers.scss'
import DirectorSidebar from '../../components/directorSidebar'
import DirectorHeader from '../../components/directorHeader'
import {  Pagination } from '@mui/material'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const RegisteredMembers = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const getTogglestatus = (getVal) => {
        setToggleMenu(getVal);
    }
    const navigate = useNavigate()


    return (
        <div className='registeredMembers'>
            <div className='directorSidebarDiv'>
                <DirectorSidebar />
            </div>
            <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
                {toggleMenu && <DirectorSidebar />}
            </div>
            <div className='directorHead'>
                <DirectorHeader getTogglestatus={getTogglestatus} />
                <div className='registeredContent' >
                    <div className='inputDiv'>
                        <div >
                            <FontAwesomeIcon color='#B6B4B3' icon={faSearch} />
                            <input type="input" placeholder='search...' />
                        </div>
                    </div>
                    <div className='status'>
                                <Button  height='34px' background='#07af1b' borderRadius='8px' onClick={()=>navigate('/director/registeredmembers')}>Registered <span >51</span></Button>
                                <Button  height='34px' background='#ffba00' borderRadius='0 8px 8px 0' onClick={()=>navigate('/director/registeredmembers')}>Pending <span >51</span></Button>
                                <Button  height='34px' background='#b6b4b3' borderRadius='0 8px 8px 0' onClick={()=>navigate('/director/registeredmembers')}>Waitlist <span >51</span></Button>
                            </div>
                    <div className='registeredName'>
                        <div className='profilePic'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPDQd7WJzl6Hnf9Zlm5xwsLc2IdS11NJv5il0G6SjNwJYRwgnNXOchNdoLIqz8N7h12w&usqp=CAU" alt="" />
                        </div>
                        <div className='profileDetails'>
                            <h1>Maya Moore</h1>
                            <h2>Minneapolis, MI</h2>
                            <h3>mmoore@gmail.com</h3>
                        </div>
                    </div>
                    <div className='registeredName'>
                        <div className='profilePic'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPDQd7WJzl6Hnf9Zlm5xwsLc2IdS11NJv5il0G6SjNwJYRwgnNXOchNdoLIqz8N7h12w&usqp=CAU" alt="" />
                        </div>
                        <div className='profileDetails'>
                            <h1>Maya Moore</h1>
                            <h2>Minneapolis, MI</h2>
                            <h3>mmoore@gmail.com</h3>
                        </div>
                    </div>
                    <div className='registeredName'>
                        <div className='profilePic'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPDQd7WJzl6Hnf9Zlm5xwsLc2IdS11NJv5il0G6SjNwJYRwgnNXOchNdoLIqz8N7h12w&usqp=CAU" alt="" />
                        </div>
                        <div className='profileDetails'>
                            <h1>Maya Moore</h1>
                            <h2>Minneapolis, MI</h2>
                            <h3>mmoore@gmail.com</h3>
                        </div>
                    </div>
                    <div className='registeredName'>
                        <div className='profilePic'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPDQd7WJzl6Hnf9Zlm5xwsLc2IdS11NJv5il0G6SjNwJYRwgnNXOchNdoLIqz8N7h12w&usqp=CAU" alt="" />
                        </div>
                        <div className='profileDetails'>
                            <h1>Maya Moore</h1>
                            <h2>Minneapolis, MI</h2>
                            <h3>mmoore@gmail.com</h3>
                        </div>
                    </div>
                    <div className='registeredName'>
                        <div className='profilePic'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPDQd7WJzl6Hnf9Zlm5xwsLc2IdS11NJv5il0G6SjNwJYRwgnNXOchNdoLIqz8N7h12w&usqp=CAU" alt="" />
                        </div>
                        <div className='profileDetails'>
                            <h1>Maya Moore</h1>
                            <h2>Minneapolis, MI</h2>
                            <h3>mmoore@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className='pagination_container'>
                                    <div className='pagination_details'>
                                        Show Per Page <span className='selected'>5</span><span>10</span><span>15</span>
                                    </div>
                                    <Pagination count={50} color="primary" />
                                    <div></div>
                                </div>
            </div>


        </div>
    )
}

export default RegisteredMembers
import React, { useContext, useState } from 'react'
import './directorSearchCamp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/button'
import DirectorSidebar from '../../components/directorSidebar'
import DirectorHeader from '../../components/directorHeader'
import { Grid, Pagination } from '@mui/material'
import { faX } from "@fortawesome/free-solid-svg-icons";
import Dropdown from '../../components/dropdown'
import CampCard from '../../components/campCard'
import { sportsOpt, stateOpt } from '../../components/header/Header'
import { ThreeDots } from 'react-loader-spinner'
import userContext from '../../components/useContext'
// import CustomButton from '../../components/CustomButton/'
import CustomButton from '../../components/customButton/customButton'

const DirectorSearchCamp = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [isLoader, setIsLoader] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [selectSport, setSelectSport] = useState([])
    const [selectState, setSelectState] = useState([])
    const [selectSkill, setSelectSkill] = useState([])
    const [selectAge, setSelectAge] = useState([])
    const [selectCost, setSelectCost] = useState([])
    // const [selectedValue, setSelectedValue] = useState([])

    console.log('selectSport', selectSport);


    console.log('selectState', selectState);

    console.log('selectCost', selectCost);


    // const CustomButton = ({ text, icon, onclick }) => {
    //     return <div className='custom_button' >
    //         {text}
    //         <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} icon={icon} />
    //     </div>
    // }

    const [selectedOptions, setSelectedOptions] = useState(['CT', 'GA', 'MC'])

    const getTogglestatus = (getVal) => {
        setToggleMenu(getVal);
    }

    const searchResult = () => {
        setIsLoader(true)
        setTimeout(() => { setIsLoader(false); setShowResult(true) }, 5000)
    }

    // const handleChanges = (event) => {
    //     // console.log(event);
    //     // const {
    //     //   target: { value },
    //     // } = event;
    //     // setSelectSport(value)
    //     // setSelectedValue(
    //       // On autofill we get a stringified value.
    //     //   typeof value === "string" ? value.split(",") : value
    //     // );
    //   };



    const [selectedValue, setSelectedValue] = useContext(userContext)



    return (
        <div className='directorSearchCamp'>
            <div className='directorSidebarDiv'>
                <DirectorSidebar />
            </div>
            <div className={toggleMenu ? 'mobileSidebarActive' : 'mobileSidebar'}>
                {toggleMenu && <DirectorSidebar />}
            </div>
            <div className='directorRightSide'>
                <DirectorHeader getTogglestatus={getTogglestatus} />
                <div className='camp_search_options' >
                    <Grid container className='camp_search_container' spacing={1.5}>
                        <Grid item sm={2.5}>
                            <Dropdown
                                options={sportsOpt}
                                width={'10rem'}
                                placeholder="Select Sports"
                                name='sports'
                                setSelectSport={setSelectSport}
                                setSelectedValue={setSelectedValue}
                                selectedValue={selectedValue}
                            />
                        </Grid>
                        <Grid item sm={2}>
                            <Dropdown
                                options={stateOpt}
                                width={'9rem'}
                                placeholder="Select State"
                                name='state'
                                setSelectState={setSelectState}
                                setSelectedValue={setSelectedValue}
                                selectedValue={selectedValue}
                            />


                        </Grid>
                        <Grid item sm={2}>
                            <Dropdown
                                options={stateOpt}
                                width={'9rem'}
                                placeholder="Select Skill"
                                name='skill'
                                setSelectSkill={setSelectSkill}
                                setSelectedValue={setSelectedValue}
                                selectedValue={selectedValue}
                            />

                        </Grid>
                        <Grid item sm={1.5}>
                            <Dropdown
                                options={stateOpt}
                                width={'9rem'}
                                placeholder="Select Age"
                                name='age'
                                setSelectAge={setSelectAge}
                                setSelectedValue={setSelectedValue}
                                selectedValue={selectedValue}
                            />

                        </Grid>
                        <Grid item sm={1.5}>

                            <Dropdown
                                options={stateOpt}
                                width={'9rem'}
                                placeholder="Select Cost"
                                name='cost'
                                setSelectCost={setSelectCost}
                                setSelectedValue={setSelectedValue}
                                selectedValue={selectedValue}
                            />

                        </Grid>

                        <Grid item sm={2.5} className='btn_search_container' >
                            <Button width={'60%'} height={'48px'} borderRadius={'4px'} onClick={() => searchResult()}>
                                <span style={{ fontFamily: 'Cabin', fontSize: '16px', fontWeight: '700', lineHeight: '19.5' }}>
                                    Search
                                </span>
                            </Button>

                            <Button width={'40%'} height={'48px'} background="#fff" border={'none'} onClick={() => setSelectedValue([])}>
                                <span style={{ fontFamily: 'Cabin', color: 'rgba(236, 111, 0, 1)', fontSize: '16px', fontWeight: '700', lineHeight: '1.5', padding: '0 5px' }}>
                                    Clear All
                                </span>
                            </Button>
                        </Grid>
                    </Grid>
                    <div className='camp_search_selected' >
                        {selectedValue.map((_, i) => {
                            return <CustomButton key={i} text={_} icon={faX} />
                        })}
                    </div>

                </div>
                <div className='search_result_container'>
                    {
                        selectedValue.length === 0 && <div className='empty_search'>
                            <h1>Select Search option above</h1>

                        </div>

                    }
                    {
                        selectedValue.length > 0 && showResult && <>
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
                        </>
                    }

                    {isLoader ? <div className='loader'>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#EC6F00"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div> : ''}
                </div>
            </div>
        </div>
    )
}

export default DirectorSearchCamp
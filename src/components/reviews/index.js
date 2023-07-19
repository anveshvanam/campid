import { Grid } from '@mui/material'
import React from 'react'
import './reviews.scss'

const   Reviews = () => {
    return (
        <div className='reviewsContainer'>
            <Grid container direction="column" padding={2} sx={{background:'#F4F4F4',borderRadius: '6px', marginBottom:'10px'}}>
                <Grid item container spacing={1}>
                   
                        <Grid item className='profilePic' >
                            <div className='reviewProfilePic'>
                                <img src="https://static.india.com/wp-content/uploads/2014/09/saina-nehwal2.jpg?impolicy=Medium_Resize&w=1200&h=800" alt="" />
                            </div>
                            <div className='name_location'>
                            <h1>Maya Moore - WNBA Player</h1>
                            <h2>Minneapolis, MI</h2>
                            </div>
                        </Grid>
                       
                        <Grid item className='reviewDate'>
                            <h2>7/1/17</h2>
                        </Grid>
                   
                </Grid>
                <Grid item className='message'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt urna a dolor convallis finibus. Donec vulputate pretium congue. Sed a massa vitae odio pharetra tincidunt id eu est….</p>

                </Grid>
                <Grid item display='flex' justifyContent='space-between' className='ratings'>
                    <h1>Overall Rating: 4.5</h1>
                    <h2>More +</h2>
                </Grid>
            </Grid>
        </div>
    )
}

export default Reviews
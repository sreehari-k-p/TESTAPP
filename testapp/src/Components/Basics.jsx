import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <h1> Test App</h1>
       <br/>
        <input type="text" placeholder="name"/>
       
        <Typography variant='h2'fontStyle='revert'> Sreehari K P  </Typography>
        <br/>
       <TextField label='name' variant='standard'/>
       <br/>
       <Button variant="text" color='error'>Text</Button>
       <br/>
       <Button variant="contained" color='success'>Contained</Button> 
       <br/><br/>
       <Button variant="outlined"color='secondary'>Outlined</Button>
        </div>
    
  )
}

export default Basics
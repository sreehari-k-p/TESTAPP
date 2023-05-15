import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Routes } from 'react-router-dom'

const Navigator = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography align='left' sx={{flexGrow: 1 }}> TrialApp </Typography>
        <Button> <Link to={'/'} style={{color:'white'}}> state </Link>   </Button>
        <Button> <Link to={'/table'} style={{color:'white'}}> Table </Link> </Button>
        <Button> <Link to={'/view'} style={{color:'white'}}> view </Link>   </Button>
        </Toolbar>
      </AppBar>
      
     





    </div>
  )
}

export default Navigator
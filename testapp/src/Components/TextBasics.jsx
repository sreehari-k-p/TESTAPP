import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TextBasics = () => {
  var [fname,setfname]= useState('')
  var [sname,setsname]= useState('')
const changeName1 = (e) =>{
    console.log(e.target.value)
    setfname(e.target.value);
    console.log(fname)
}
const changeName2 = (e) =>{
    setsname(e.target.value);
    console.log(sname)
}
 
  return (
    <div>
     <Typography variant = 'h2'>Test </Typography>
     <br/>
         <TextField label='first name' variant='outlined' onChange={changeName1}></TextField> 
        {fname}
        <br/><br/>
        <TextField label='second name' variant='outlined' onChange={changeName2}></TextField> 
        {sname}
  
   
    </div>
  )
}

export default TextBasics
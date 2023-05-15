import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setpname]= useState("Class");
    var[data,setdata] = useState();
  const changeName= () =>{
  console.log("clicked");
  setpname(data)
  }
 
const readValue=(e) =>{
 setdata(e.target.value);
 console.log(data)
}
 
  return (
    <div>
      
  <Typography variant ='h3'> Welcome {pname}</Typography>
  <br/>
  <TextField label='name' variant='outlined' onClick={readValue}></TextField>
        <br/><br/>
  <Button variant='contained'onClick={changeName}> Change </Button> 
  
  
    </div>
  )
}

export default StateBasics
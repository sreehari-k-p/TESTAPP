import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Esytxt = () => {
  var [val,setVal] = useState({id:'',name:''});
  
  const inputHandler = (e)=>{
  const{name,value} = e
  .target
  setVal((val)=>({...val,[name]:value}))
  }



  return (

    <div> 
    <TextField label='id' name='id' value={val.id} onChange={inputHandler}/>
    <br/>
    <TextField label='name' name='name' value={val.name} onChange={inputHandler}/>
    <br/>
   id: {val.id}
    <br/>
   name: {val.name}
    </div>
   
    )
}

export default Esytxt
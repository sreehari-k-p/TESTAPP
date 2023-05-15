import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => {
    var[names,setName]= useState(['Soorya','Akshay','Sreehari','Sijil' ])
  return (
    <div>
    <Typography variant='h2'>Table and Array </Typography>
   <TableContainer>
      <Table>
         <TableHead>
            <TableRow>
                <TableCell  style={{color:'red',fontFamily:'cursive' }}><h1> Name </h1></TableCell>
            </TableRow>
         </TableHead>
            <TableBody>
                {
                    names.map((value,index) => {
                        return(
                            <TableRow key={index}>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
      </Table>
   </TableContainer>

    </div>
  )
}

export default TableArray
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Categorycard({ image, label, width, height, color}) {
  return (
    <Box className='categoryCard' width={width} height={height}>
      <Paper elevation={3} style={{background:color}}>
        <img src={image} alt={label} className="category-image" style={{width:`${width}`, height:`${height}`}}/>
        <p className='category-label' >{label}</p>
      </Paper>
    </Box>

  )
}

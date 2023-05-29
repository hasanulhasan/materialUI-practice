import { CircularProgress, IconButton, LinearProgress, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DensitySmallSharpIcon from '@mui/icons-material/DensitySmallSharp';

const Progress = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <CircularProgress color='secondary' value={75} />
      <LinearProgress/>
      <Rating value={value} onChange={(e,val)=> setValue(val)} size='large' precision={0.5}/>
      <Typography>Rated {value} </Typography>
      <DensitySmallSharpIcon/>
      <IconButton onClick={()=> alert('Icon clicked')}>
      <AcUnitIcon color='secondary'/>
      </IconButton>

    </div>
  );
};

export default Progress;
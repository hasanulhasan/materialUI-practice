import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const AutoComp = () => {
  const courses = ['Node', 'Mongo', 'Next', 'Prisma']
  return (
    <div>
      <Autocomplete
        sx={{ width: 200 }}
        options={courses}
        renderInput={(params) => {
          <TextField {...params} label='Select a course' />
        }}
      />
    </div>
  );
};

export default AutoComp;
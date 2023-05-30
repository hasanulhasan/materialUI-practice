import { Grid } from '@mui/material';
import React from 'react';

const ResponsiveGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sm={6} lg={3} xl={2} sx={{background: 'red'}}>
          Content A
        </Grid>
        <Grid item xs={6} sm={6} lg={3} xl={2} sx={{background: 'green'}}>
          Content B
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveGrid;
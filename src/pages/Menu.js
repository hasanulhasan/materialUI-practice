import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MenuList } from '../data/data'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Menu = () => {
  return (
    <Layout>
    <Box sx={{ '& > :not(style)': { m: 2, mt: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="search book" variant="standard" />
      </Box>
    </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          MenuList.map(menu => (
            <Card sx={{maxWidth: '390px', display: 'flex', m:2}} >
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: '400px' }}
                  component={'img'}
                  src={menu.image}
                  alt={menu.name} />
              
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant='body2' >
                  {menu.description}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  );
};

export default Menu;
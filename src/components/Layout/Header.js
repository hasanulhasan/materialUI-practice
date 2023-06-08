import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //menu drawer
  const handleDraweToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick={handleDraweToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant='h6'
        component={'div'}
        sx={{ flexGrow: 1, my: 2}}
      >
        <LunchDiningIcon />
        My Restaurant
      </Typography>
      <Divider/>
      <ul className='mobile-navigation'>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-level='open drawer'
              edge='start'
              sx={{
                margin: 2, display: { sm: 'none' }
              }}
              onClick={handleDraweToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant='h6'
              component={'div'}
              sx={{ flexGrow: 1 }}
            >
              <LunchDiningIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            onClose={handleDraweToggle}
            open={mobileOpen}
            sx={{ display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper":{
              boxSizing: 'border-box',
              width: '240px'
            } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{p:1}}>
        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
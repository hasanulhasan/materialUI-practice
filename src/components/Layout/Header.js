import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import Logo from '../../images/logo.svg'

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
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} height='70px' width='180px' alt='logo'/>
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><NavLink to={'/practice'}>Practice</NavLink></li>
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
              <img src={Logo} height='70px' width='220px' alt='logo'/>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li><NavLink activeClassName='active' to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Signup</NavLink></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            onClose={handleDraweToggle}
            open={mobileOpen}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: '240px'
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
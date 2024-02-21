import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation } from 'react-router-dom';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { Icon } from '@iconify/react';
import { Divider } from '@mui/material';
import image from '../../src/images/image.png';

const pages = ['Catalog', 'Resources', 'Community', 'Pricing', 'Career Center', 'For Teams'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isTokenAvailable = localStorage.getItem('idToken');

  const handleUserMenuClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('idToken');
        handleCloseUserMenu();
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff0e5' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={image} style={{ height: '50px', width: '108px' }} alt="logo" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Search">
              <SearchIcon sx={{ color: 'black',marginRight:2 }} />
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isTokenAvailable ? (
              <>
                <Avatar
                  sx={{ bgcolor: deepPurple[500], cursor: 'pointer' }}
                  onClick={handleUserMenuClick}
                >
                  dl
                </Avatar>
                {isTokenAvailable && (
                  <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                      <MenuItem > <Icon icon="fluent-mdl2:profile-search" width="26" height="25" /> Profile</MenuItem>
                      <MenuItem > <Icon icon="lets-icons:setting-line" width="27" height="25" /> Account+Billing</MenuItem>
                      <MenuItem > <Icon icon="teenyicons:home-outline" width="28" height="25" /> My Home</MenuItem>
                      <MenuItem > <Icon icon="lets-icons:question-light" width="29" height="25" />HelpCenter</MenuItem>
                      <Divider/>
                      <MenuItem   onClick={handleLogout}>Logout</MenuItem>
            </Menu>
                  
                    // {settings.map((setting) => (
                    //   <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    //     {setting}
                    //   </MenuItem>
                    // ))}
                  
                )}
              </>
            ) : (
              location.pathname === '/login' ? (
                <Tooltip title="Sign Up">
                  <Link to="/signup">
                    <Button sx={{ color: 'white',background:'blue' }}>Sign Up</Button>
                  </Link>
                </Tooltip>
              ) : (
                <Tooltip title="Login">
                  <Link to="/login">
                    <Button sx={{ color: 'black' }}>Login</Button>
                  </Link>
                </Tooltip>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

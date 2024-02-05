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
import image from '../../src/images/image.png';
import { Link } from 'react-router-dom';
import { deepPurple } from '@mui/material/colors';
import {useNavigate} from "react-router-dom";


const pages = ['Catalog', 'Resources', 'Community','Pricing','Career Center','For Teams'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  const handleUserMenuClick=(event)=>{
    setAnchorElUser(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('idToken');
    handleCloseUserMenu();
    navigate("/login");
  }
return (
    <AppBar position="fixed"
    sx={{ backgroundColor: '#fff0e5' }}
    >
    <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/">
          <img src={image} style={{height: '50px', width: '108px'}} ></img>
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            </Typography>
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
           <SearchIcon sx={{color:'black'}} />
             </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isTokenAvailable ? (
              // If token is available, show Avatar with Dropdown
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
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                )}
              </>
            ) : (
              // If token is not available, show Login button
              <Tooltip title="Login">
                <Link to="/login">
                  <Button sx={{ color: 'black' }}>Login</Button>
                </Link>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


















// function Navbar() {
//     return (
//       <>
//        hai navbar 
//       </>
//     );
//   }
  
//   export default Navbar;
  
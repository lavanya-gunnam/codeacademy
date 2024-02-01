// import React from "react";
// import Navbar from "../components/Navbar";
// function Login(){
//     return(
//         <>
//     <Navbar/>
//         </>
//     );
// }
// export default Login;
import * as React from 'react';
import Navbar from "../components/Navbar";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Google from '../../src/images/Google.png';
import Facebook from '../../src/images/Facebook.png';
import linkedin from '../../src/images/linkedin.png';
import GitHub from '../../src/images/GitHub.png';
import twitter from '../../src/images/twitter.png';
import Apple from '../../src/images/Apple.png';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';




// function Copyright(props) {
//   return (

//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
 
  border:'1px solid black',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("xs")]: {
  textAlign: "center",
  marginTop:8
  },
}));

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <Navbar />
      {/* <ThemeProvider theme={defaultTheme}> */}
      <Box sx={{ backgroundColor: '#fff0e5', py: 15 }}>
        <Container maxWidth="xs">
          {/* <CssBaseline /> */}
          <Box
            sx={{

              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography fontFamily="Arial, sans-serif" sx={{ textAlign: "left", fontWeight: '500', fontSize: '1.625rem', lineHeight: "1.5" }} >
              Log in to Codecademy
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Typography sx={{ textAlign: "left", fontWeight: '100', fontSize: '.8rem', color: 'black', lineHeight: "1.5" }}>Email or Username</Typography>

              <TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Typography sx={{ textAlign: "left", fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: "1rem" }}>Password</Typography>
              <TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember"/>}
              // label="Remember me"
            /> */}

              <Grid item xs>


                <Link href="#" variant="body2">
                  < Typography sx={{ textAlign: 'left', fontWeight: 700, marginBottom: "0.5rem", marginTop: 1 }}> I forgot my password</Typography>
                </Link>
                <Link href="#" variant="body2">
                  < Typography sx={{ textAlign: 'left', fontWeight: 700 }}>   <Button
                    type="submit"
                    // fullWidth
                    variant="contained"

                    sx={{ mt: 3, mb: 2, alignItems: 'left' }}
                  >
                    Log In
                  </Button></Typography>
                </Link>
                <Typography sx={{ textAlign: 'left', fontWeight: '700', marginBottom: '1rem', fontSize: '1rem' }}>Or log in using: </Typography>
                {/* <Button
              type="submit"
              // fullWidth
              variant="contained"
            
              sx={{ mt: 3, mb: 2,  alignItems: 'left'}}
            >
              Log In
            </Button> */}
              </Grid>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} columns={16}>
                  <Grid item xs={2.6} md={2.5} sm={2.2}>
                    <Item >  <img src={Google} style={{height: '30px', width: '31px',maxWidth: '100%'}} ></img></Item>
                  </Grid>
                  <Grid item xs={2.6} md={2.5} sm={2.2}>
                <Item><img src={Facebook} style={{height: '30px', width: '31px',maxWidth: '100%'}} ></img></Item>
                  </Grid>
                  <Grid item xs={2.6} md={2.5} sm={2.2}>
                    <Item><img src={linkedin} style={{height: '30px', width: '31px',maxWidth: '100%'}} ></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={2.5} sm={2.2}>
                    <Item><img src={GitHub} style={{height: '32px', width: '36px',maxWidth: '100%'}} ></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={2.5} sm={2.2}>
                    <Item><img src={twitter} style={{height: '32px', width: '36px',maxWidth: '100%'}} ></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={2.5} sm={2.2}>
                    <Item><img src={Apple} style={{height: '30px', width: '45px',maxWidth: '100%'}} ></img></Item>
                  </Grid>
                </Grid>
              </Box>
              <Grid container sx={{marginTop:3}}>

                <Grid item>
                  Not a member yet?
                  <Link to='/signup'>
                    {" Sign up for free"}
                  </Link>

                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
        {/* </ThemeProvider> */}
      </Box>
      <Footer/>

    </>
  );
}
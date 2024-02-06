import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
import { auth, googleAuthProvider } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { signInWithPopup } from "firebase/auth"; // Correct import statement

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: '1px solid black',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("xs")]: {
    textAlign: "center",
    marginTop: 8
  },
}));

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email or username is required';
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert('working');
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential)
        user.getIdToken().then((idToken) => {
          if (idToken) {
            // Store the ID token in local storage
            localStorage.setItem('idToken', idToken);
          }
        });
        navigate("/home");

      })
      .catch((error) => {
        console.log(error);

      });
    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form data submitted:', formData);
      toast.success('Form submitted successfully');
    } else {
      console.log('Form validation failed');
      toast.error('Form validation failed');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [value, setValue] = useState("");

  const handlegoogleClick = () => {
    signInWithPopup(auth, googleAuthProvider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"))
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ py: 15 }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <Typography fontFamily="Arial, sans-serif" sx={{ textAlign: "left", fontWeight: '500', fontSize: '1.625rem', lineHeight: "1.5" }} >
              Log in to Codecademy
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography sx={{ textAlign: "left", fontWeight: '100', fontSize: '.8rem', color: 'black', lineHeight: "1.5" }}>Email or Username</Typography>

              <TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <Typography sx={{ textAlign: "left", fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: "1rem" }}>Password</Typography>
              <TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Grid item xs>
                <Link href="#" variant="body2">
                  < Typography sx={{ textAlign: 'left', fontWeight: 700, marginBottom: "0.5rem", marginTop: 1 }}> I forgot my password</Typography>
                </Link>
                <Link href="#" variant="body2">
                  < Typography sx={{ textAlign: 'left', fontWeight: 700 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2, alignItems: 'left' }}
                      onClick={(e) => handleSubmit(e)}
                    >  Log In
                    </Button>
                  </Typography>
                </Link>
                <Typography sx={{ textAlign: 'left', fontWeight: '700', marginBottom: '1rem', fontSize: '1rem' }}>Or log in using: </Typography>
              </Grid>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} columns={16}>
                  <Grid item xs={2.6} md={2.5} sm={2.2}>
                    <Item >  <img src={Google} style={{ height: '30px', width: '31px', maxWidth: '100%' }} alt="Google" onClick={handlegoogleClick} ></img></Item>
                  </Grid>
                  <Grid item xs={2.6} md={2.5} sm={2.2}>
                    <Item><img src={Facebook} style={{ height: '30px', width: '31px', maxWidth: '100%' }} alt="Facebook"></img></Item>
                  </Grid>
                  <Grid item xs={2.6} md={2.5} sm={2.2}>
                    <Item><img src={linkedin} style={{ height: '30px', width: '31px', maxWidth: '100%' }} alt="LinkedIn"></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={2.5} sm={2.2}>
                    <Item><img src={GitHub} style={{ height: '32px', width: '36px', maxWidth: '100%' }} alt="GitHub"></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={2.5} sm={2.2}>
                    <Item><img src={twitter} style={{ height: '32px', width: '36px', maxWidth: '100%' }} alt="Twitter"></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={2.5} sm={2.2}>

                    <Item><img src={Apple} style={{ height: '30px', width: '45px', maxWidth: '100%' }} alt="Apple"></img></Item>
                  </Grid>
                </Grid>
              </Box>
              <Grid container sx={{ marginTop: 3 }}>
                <Grid item>
                  Not a member yet?
                  <Link to='/signup'>
                    {" Sign up for free"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

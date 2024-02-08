import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Google from '../../src/images/Google.png';
import Facebook from '../../src/images/Facebook.png';
import linkedin from '../../src/images/linkedin.png';
import GitHub from '../../src/images/GitHub.png';
import Apple from '../../src/images/Apple.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthProvider,facebookAuthProvider } from '../firebase';
import { signInWithPopup } from "firebase/auth"; 
import { FacebookAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: '1px solid black',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('xs')]: {
    textAlign: 'center',
    marginTop: 8,
  },
}));
export default function SignIn() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    conformPassword: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
    conformPassword: '',
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email is required';
    } else {
      newErrors.email = '';
    }
    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }
    if (!formData.conformPassword) {
      valid = false;
      newErrors.conformPassword = 'Conform Password is required';
    } else if (formData.password !== formData.conformPassword) {
      valid = false;
      newErrors.conformPassword = 'Passwords do not match';
    } else {
      newErrors.conformPassword = '';
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential)
        // Signed up 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
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
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");

  const handlegoogleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
    .then((data) => {
      console.log("User signin succesfully",data.user.email)
      localStorage.setItem('idToken',data.user.accessToken);
      // console.log("this is token", idToken)
      setValue(data.user.email)
    localStorage.setItem("email", data.user.email)
      navigate("/home");
    })
};
 React.useEffect(() => {
    setValue(localStorage.getItem("email"))
    
  }, []);
  const facebookClick = () =>{
    signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      // The signed-in user info.
      console.log('result user',result.user)
      const user = result.user;
  localStorage.setItem('idToken',result.user.accessToken);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      navigate("/home");
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
  }
  return (
    <>
      <Navbar />
      <Box sx={{ py: 15 }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <Typography fontFamily="Arial, sans-serif" sx={{ textAlign: 'left', fontWeight: '700', fontSize: '1.625rem', lineHeight: '1.5' }}>
              Get started for free
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Typography sx={{ textAlign: 'left', fontWeight: '100', fontSize: '.8rem', color: 'black', lineHeight: '1.5' }}>Email </Typography>
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
              <Typography sx={{ textAlign: 'left', fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: '1rem' }}>Password</Typography>
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
              <Typography sx={{ textAlign: 'left', fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: '1rem' }}>Conform Password</Typography>
              <TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                name="conformPassword"
                type="password"
                id="conformPassword"
                autoComplete="current-password"
                value={formData.conformPassword}
                onChange={handleChange}
                error={!!errors.conformPassword}
                helperText={errors.conformPassword}
              />
              <Grid item xs>
                <Link href="#" variant="body2">
                  <Typography sx={{ textAlign: 'left', fontWeight: 700 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, alignItems: 'left' }}
                      onClick={handleSubmit}  // Add this line
                    >
                      Sign up
                    </Button>
                  </Typography>
                </Link>
                <Typography sx={{ fontWeight: 400, fontSize: '0.87rem' }}>
                  By signing up for Codecademy, you agree to Codecademy's
                  <Link> Terms of Service</Link> &
                  <Link>Privacy Policy.</Link>
                </Typography>
                <Typography sx={{ textAlign: 'left', fontWeight: '700', marginBottom: '1rem', fontSize: '1rem', marginTop: 2 }}>Or Sign Up using: </Typography>
              </Grid>
              <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={1} columns={16}>
                  <Grid item xs={2.6} md={3} sm={2.2}>
                    <Item >  <img src={Google} style={{ height: '30px', width: '31px' }}onClick={handlegoogleClick} ></img></Item>
                  </Grid>
                  <Grid item xs={2.6} md={3} sm={2.2}>
                    <Item><img src={Facebook} style={{ height: '30px', width: '31px' }}onClick={facebookClick} ></img></Item>
                  </Grid>
                  <Grid item xs={2.6} md={3} sm={2.2}>
                    <Item><img src={linkedin} style={{ height: '30px', width: '31px' }} ></img></Item>
                  </Grid>
                  <Grid item xs={2.7} md={3} sm={2.2}>
                    <Item><img src={GitHub} style={{ height: '32px', width: '36px' }} ></img></Item>
                  </Grid>

                  <Grid item xs={2.7} md={3} sm={2.2}>
                    <Item><img src={Apple} style={{ height: '30px', width: '45px' }} ></img></Item>
                  </Grid>
                </Grid>
              </Box>
              <Grid container sx={{ marginTop: 3 }}>
                <Grid item>
                  Already have an account?
                  <Link to="/login">{" Log in "}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}




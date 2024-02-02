import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import image from '../../src/images/image.png';
import Box from '@mui/material/Box';
import signup from '../../src/images/signup.webp';
import { Link } from 'react-router-dom';
const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#3A10E5' : '#3A10E5',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Herocomponenttwo(){
    return(
        <>
        <Box sx={{ flexGrow: 1, backgroundColor: '#3A10E5',marginTop:2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}sm={12} md={5}>
            <Item sx={{ marginTop: 5 }}>
            <img src={signup} 
            style={{ height: '60%', width: '70%' }}
             alt="Description" />
            </Item>
        </Grid>
           <Grid item xs={12} sm ={12} md={5}>
            <Item sx={{ marginTop: 10 }}>
              <Typography variant='h2' sx={{  color:'#fff', marginBottom:3 }}>Start for free</Typography>
              <Typography variant= "h3" sx={{  color:'#fff'}}>If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.</Typography>
         <Link to='/signup'>  <Button sx={{backgroundColor:"yellow", color:"black", marginTop:2, marginBottom:{md:"20px",sm:"20px",xs:"20px"}}}>Signup</Button></Link> 
            </Item>
          </Grid>
        </Grid>
        </Box>
        </>
    );
}
export default Herocomponenttwo;
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from '@mui/material/Grid';
import home from '../../src/images/home.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff0e5' : '#fff0e5',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Homepage() {
    return (
        <>
            <Navbar />
            
            <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                <Grid container spacing={2} sx={{ marginBottom: 2}}>
                <Grid item xs={2} md={1}>
                                </Grid>
                    <Grid item xs={12} sm={12} md={5} >
                        <Item sx={{ marginTop: 10 }}>
                            <Typography variant='h3' sx={{ color: 'black', fontWeight: '600' }} >Welcome To Codecademy!</Typography>
                            <Typography sx={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }} >What Do You Want To Learn About ?</Typography>
                        </Item>
                        <Grid container spacing={2} sx={{ marginTop: 1 }}>
                            <Grid item xs={6} md={5} >
                                <Link to='/Course/web' style={{ textDecoration: 'none' }}>
                                    <Item sx={{ color: "black", border: '1px solid black', background: '#fff', paddingY: 3 }}><Typography variant="h3">Web Development </Typography></Item></Link>
                                <Item sx={{ color: "black", border: '1px solid black', background: '#fff', marginTop: 2, paddingY: 3 }}><Typography variant="h3">Computer Science </Typography></Item>
                                <Item sx={{ color: "black", border: '1px solid black', background: '#fff', marginTop: 2, paddingY: 3 }}><Typography variant="h3">Mobile Development </Typography></Item>
                            </Grid>
                            <Grid item xs={6} md={5}>
                                <Link to='/Course/datascience'>
                                <Item sx={{ color: "black", border: '1px solid black', background: '#fff', paddingY: 3 }}><Typography variant="h3">Data Science </Typography></Item></Link>
                                <Item sx={{ color: "black", border: '1px solid black', background: '#fff', marginTop: 2, paddingY: 3 }}><Typography variant="h3">Web Design </Typography></Item>
                                <Item sx={{ color: "black", border:  '1px solid black', background: '#fff', marginTop: 2, paddingY: 3 }}><Typography variant="h3">Artificial Intelligence </Typography></Item>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Item sx={{ marginTop: 10}}>
                            <img src={home}
                                style={{ height: '30%', width: '60%' }}
                                alt="Description" />
                        </Item>
                        <Typography>We have hundreds of courses that cover just about everything</Typography>
                    </Grid>
                </Grid>
            </Box>
            
            <Footer />
        </>
    )
}
export default Homepage;
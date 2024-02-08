import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Import stable Grid component
import Navbar from '../components/Navbar';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';


const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff0e5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Webdevelopment() {
    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1, marginTop: 15 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Item></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ textAlign: 'left' }}><Typography>Related topics</Typography>
                            <Typography>HTML&CSS</Typography>
                            <Typography>JavaScript</Typography>
                            <Typography>PHP</Typography>
                            <Typography>Ruby</Typography>
                            <Divider />
                            <Typography>Top languages&subjects</Typography>
                            <Typography>Python</Typography>
                            <Typography>AI</Typography>
                            <Typography>Web Development</Typography>
                            <Typography>SQL</Typography>
                            <Typography>Java</Typography>
                            <Typography>C++</Typography>
                            <Typography>Web Design</Typography>
                            <Typography>Cubersecurity</Typography>
                            <Typography>Data Science</Typography>
                            <Divider />
                            <Button sx={{ border: '1px solid blue', borderRadius: '5px', marginTop: 2 }}><Typography sx={{ color: 'blue' }}>View full catalog</Typography></Button>
                            <Typography sx={{ marginTop: 3 }}>Where do i begin ?</Typography>
                        </Item>

                    </Grid>
                    <Grid item xs={8}>
                      <Grid container spacing={3}  >
                      <Grid item xs={6} sx={{ padding: 10 }}>
                        <Item sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: '400', lineHeight: '0.1', color: 'blue', }}>Catalog
                                <span style={{ verticalAlign: 'middle', color: 'black' }}>/Web Development
                                </span> </Typography>
                            <Typography sx={{ fontSize: '1.5rem', fontWeight: '500', marginTop: 2, color: 'black' }}>Web Development</Typography>
                            <Typography sx={{ fontSize: '0.8rem', marginTop: 2 }}> Web Development is the practice of developing websites and web apps that live on the internet. Whether you’re interested in front-end, back-end, or going full-stack, our web development courses will help you get there.</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={{ padding: 10, marginTop: 4, }}>
                        <Item sx={{ color: "black", border: '1px solid black', textAlign: 'left', paddingX: 2 }}><Typography variant="h3">Related resources </Typography>
                            <Typography variant="h3">
                             <FiberManualRecordRoundedIcon  sx={{fontSize:'0.5rem'}}/> Docs:HTML CSS JavaScript
                            </Typography>
                            <Typography variant="h3">
                             <FiberManualRecordRoundedIcon  sx={{fontSize:'0.5rem'}}/> Cheatsheets
                            </Typography>
                            <Typography variant="h3">
                             <FiberManualRecordRoundedIcon  sx={{fontSize:'0.5rem'}}/> Articles
                            </Typography>
                            <Typography >
                             <FiberManualRecordRoundedIcon  sx={{fontSize:'0.5rem'}}/> Projects
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sx={{marginTop:6}}>
                        <Item sx={{textAlign:'left'}}> <Typography sx={{fontSize:'1.2rem',color:'black'}}>New To Web Development? Start here </Typography></Item>
                    </Grid>
                        </Grid>  
                    </Grid>
                  
                    {/* <Grid item xs={1}>
                        <Item></Item>
                    </Grid> */}
                </Grid>
            </Box>
        </>
    )
}
export default Webdevelopment;

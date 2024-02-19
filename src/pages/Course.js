import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Import stable Grid component
import Navbar from '../components/Navbar';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import pillars from '../../src/images/pillars.png';
import SetData from "../redux/actions/actionss";
import GetData from "../redux/api/getData";
import { connect } from "react-redux";
import CourseCard from "../components/CourseCard";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Footer from "../components/Footer";



const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff0e5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function Course({
    data,
    SetData,
}) {

    useEffect(() => {
        GettingData();
    }, [])


    const GettingData = async () => {
        const gotIt = await (GetData());
        console.log("this is api data", gotIt);
        SetData(gotIt);
    }


    const param = useParams();
    const routeName = param.id;
    console.log("this is the page of ", routeName);

    const OrignalData = data;

    const compair = OrignalData.filter((item) => (item.status === routeName))





    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1, marginTop: 15 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Item></Item>
                    </Grid>
                    <Grid item xs={12} sm={2} md={3}>
                        <Item  variant="h3" sx={{ textAlign: 'left',color:'black' }}><Typography variant="h3"sx={{fontWeight:600}}>Related topics</Typography>
                            <Typography variant="h3" sx={{marginTop:2}}>HTML&CSS</Typography>
                            <Typography variant="h3" sx={{marginTop:1}}>JavaScript</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>PHP</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>Ruby</Typography>
                            <Divider />
                            <Typography variant="h3"sx={{fontWeight:600,color:'black',marginTop:2}}>Top languages&subjects</Typography>
                            <Typography variant="h3" sx={{marginTop:2}}>Python</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>AI</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>Web Development</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>SQL</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>Java</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>C++</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>Web Design</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>Cubersecurity</Typography>
                            <Typography variant="h3"sx={{marginTop:1}}>Data Science</Typography>
                            <Divider />
                            <Button sx={{ border: '1px solid blue', borderRadius: '5px', marginTop: 2 }}><Typography sx={{ color: 'blue' }}>View full catalog</Typography></Button>
                            <Typography sx={{ marginTop: 3 }}>Where do i begin ?</Typography>
                        </Item>

                    </Grid>
                    <Grid item xs={12} sm={9} md={8}>
                        <Grid container spacing={3}  >
                            <Grid item xs={12} md={7} sm={6} sx={{ padding: 1 }}>
                                <Item sx={{ textAlign: 'left' }}>
                                    <Typography sx={{ fontSize: '1rem', fontWeight: '400', lineHeight: '0.1', color: 'blue', }}>Catalog
                                        <span style={{ verticalAlign: 'middle', color: 'black' }}>/Web Development
                                        </span> </Typography>
                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: '700', marginTop: 2, color: 'black' }}>Web Development</Typography>
                                    <Typography sx={{ fontSize: '0.8rem', marginTop: 2,color: 'black' }}> Web Development is the practice of developing websites and web apps that live on the internet. Whether you’re interested in front-end, back-end, or going full-stack, our web development courses will help you get there.</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={6} sx={{ padding: 1, marginTop: 4, }}>
                                <Item sx={{ color: "black", border: '1px solid black', textAlign: 'left', paddingX: 2 }}><Typography sx={{fontSize:'1.25rem',fontWeight:500}}>Related resources </Typography>
                                    <Typography variant="h3">
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem' ,marginTop:1}} /> Docs:
                                        <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>HTML CSS JavaScript
                                        </a>
                                    </Typography>
                                    <Typography variant="h3">
                                    
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem',marginTop:1 }} /> 
                                        <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>Cheatsheets </a>
                                    </Typography>
                                    <Typography variant="h3">
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem',marginTop:1 }} /> 
                                        <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>
                                        Articles</a>
                                    </Typography>
                                    <Typography >
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem',marginTop:1 }} /> 
                                        <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>Projects
                                        </a>
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={7} sm={6} sx={{ marginTop: 6 ,marginRight:2}}>
                                <Item sx={{ textAlign: 'left' }}> <Typography sx={{ fontSize: '1.2rem', color: 'black',fontWeight:700 }}>New To Web Development? Start here </Typography></Item>
                                <Card sx={{ maxWidth: 500, border: '1px solid black' }}>
                                    <Grid item xs={12} sx={{ backgroundColor: '#EAFDC6', height: '40px' }}>
                                        <Typography sx={{ textAlign: 'left',fontSize:"1rem",fontWeight:400 }}>Free Course</Typography>                        </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <CardContent sx={{ textAlign: 'left' }}>

                                                <Typography sx={{ fontSize:"1.25rem",fontWeight:600 }}>
                                                    Learn HTML
                                                </Typography>
                                                <Typography variant="h3" component="div">
                                                    Start at the beginning by learning HTML basics - an important foundation for building and editing web pages.
                                                </Typography>
                                            </CardContent>
                                    <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />

                                        </Grid>
                                        <Grid item xs={4} sx={{ marginTop: 2 }}>
                                            <img src={pillars} style={{ height: '80%', width: '50%' }}
                                                alt="Description" />
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                                        <Grid item xs={6}>
                                        <Typography sx={{ display: 'flex', alignItems: 'center',fontSize:'0.875rem',fontWeight:200 }}> < SignalCellularAltIcon/> Beginner Friendly</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{fontSize:'0.875rem',fontWeight:200}} >7hours</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>

                            </Grid>
                            <Grid item xs={12} md={4} sm={6} sx={{ marginTop: 12, padding: 6 }}>
                                <Card sx={{ maxWidth: 350, border: '1px solid black',paddingY:3.8 }}>
                                
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                        <Typography sx={{textAlign: 'left',marginLeft:1,fontSize:"0.875rem",fontWeight:400}}  >
                                                    Blog Post
                                                </Typography>
                                            <CardContent >

                                               
                                                <Typography sx={{ fontWeight:700,fontSize:'1.25rem',whiteSpace: 'nowrap' }}>
                                                    What is Web Development?
                                                </Typography>
                                                <Typography  sx={{ fontWeight:400,fontSize:'0.875rem',textAlign: 'left' }}> 1 March 2022</Typography>
                                            </CardContent>
                                        </Grid>

                                    </Grid>

                                </Card>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: 9 }}>
                <Grid container spacing={2} >
                    <Grid item ></Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: "left" }} >
                        <Typography sx={{fontWeight:600,fontSize:"1.5rem",
                            marginLeft: { xs: 0, md: "8%" } // Set margin-left to 0 on xs and 10px on md
                        }}>Web Development courses<Typography component="span" sx={{ fontWeight: 200, marginLeft:0.5 }}>
                        163 results
                    </Typography></Typography>
                        <Grid container justifyContent="center">
                            <Grid item xs={11}> {/* Adjust the value based on your layout */}
                                <Divider sx={{ border: '1px solid black' }} />
                            </Grid>
                        </Grid>
                     
                    </Grid>
                </Grid>
            </Box>
            <CourseCard />
            <Footer />
            {compair.map((item => (
                <>
                    <h1>{item.title}</h1>
                </>
            )))}

        </>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = {
    SetData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
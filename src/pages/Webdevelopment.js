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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import pillars from '../../src/images/pillars.png';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



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
                                <Item sx={{ color: "black", border: '1px solid black', textAlign: 'left', paddingX: 10 }}><Typography variant="h3">Related resources </Typography>
                                    <Typography variant="h3">
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem' }} /> Docs:HTML CSS JavaScript
                                    </Typography>
                                    <Typography variant="h3">
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem' }} /> Cheatsheets
                                    </Typography>
                                    <Typography variant="h3">
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem' }} /> Articles
                                    </Typography>
                                    <Typography >
                                        <FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem' }} /> Projects
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: 6 }}>
                                <Item sx={{ textAlign: 'left' }}> <Typography sx={{ fontSize: '1.2rem', color: 'black' }}>New To Web Development? Start here </Typography></Item>
                                <Card sx={{ minWidth: 500, border: '1px solid black' }}>
                                    <Grid item xs={12} sx={{ backgroundColor: '#EAFDC6', height: '30px', marginBottom: '10px' }}>
                                        <Typography sx={{ textAlign: 'left' }}>Free Course</Typography>                        </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <CardContent sx={{ textAlign: 'left' }}>

                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Learn HTML
                                                </Typography>
                                                <Typography variant="h3" component="div">
                                                    Start at the beginning by learning HTML basics - an important foundation for building and editing web pages.
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={4} sx={{ marginTop: 2 }}>
                                            <img src={pillars} style={{ height: '80%', width: '50%' }}
                                                alt="Description" />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                                        <Grid item xs={6}>
                                            <Typography color="text.secondary"> Beginner Friendly</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">7hours</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>

                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: 12, padding: 6 }}>
                                <Card sx={{ minWidth: 350, border: '1px solid black',paddingY:5 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <CardContent sx={{ textAlign: 'left' }}>

                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Blog Post
                                                </Typography>
                                                <Typography variant="h3" component="div">
                                                    What is Web Development?
                                                </Typography>
                                                <Typography> 1 March 2022</Typography>
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
                    <Grid item xs={10} sx={{ textAlign: "left" }} >
                        <Typography sx={{ paddingX: 10, fontSize: "2rem" }}>Web Development courses</Typography>
                        {/* <Grid container justifyContent="center">
                <Grid item xs={11}>
                    <Divider sx={{border:'1px solid black'}} />
                </Grid>
            </Grid> */}
                    </Grid>
                    
                </Grid>
                
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Item></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ textAlign: 'left' }}><Typography >Filters clearfilters</Typography>
                            <Typography>Level</Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Beginner"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Intermediate"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Advanced"
                                />
                            </FormGroup>
                            <Divider />
                            <Typography>Price <a href="/" style={{ textDecoration: 'none' }}>view plans</a></Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Free"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Paid"
                                />

                            </FormGroup>
                            <Divider />
                            <Typography>Type</Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Career Path"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Skillpath"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="course"
                                />

                            </FormGroup>
<Divider/>
                            <Typography>Average time to complete</Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Less than 5hours"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="5-10"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="10-20"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="20-60"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="60+"
                                />

                            </FormGroup>
                            <Divider/>
                            <Typography>Projects</Typography>
                            <FormGroup >
                            <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Practice Projects"
                                />
                                 <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Portfolio Projects"
                                />
                                </FormGroup>
                        </Item>

                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2}  >
                            <Grid  xs={3}  >
                                <Item >
                                <Card sx={{ minWidth: 275 }}>
                                <Grid item xs={12} sx={{ backgroundColor: 'black', height: '30px', marginBottom: '10px' }}>
                                        <Typography sx={{ textAlign: 'left',color:'white' }}>Career Path</Typography>                        </Grid>
      <CardContent sx={{marginTop:-3,textAlign:"left"}}>
        <Typography sx={{ fontSize: "1.5rem" }}>
          Full-Stack Engineer
        </Typography>
        <Typography >
          A full-stack engineer can get a project done from start to finish,back-end to front-end
        </Typography>
        <Typography sx={{ marginTop:4}} color="text.secondary">
            includes 51 Courses
        </Typography>
        <Typography >
          With Professional Certification
        </Typography>
        <Grid container alignItems="center" justifyContent="space-between">
      <Typography>Beginner Friendly</Typography>
      <Typography>150 hours</Typography>
    </Grid>
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>  
                                </Item>
                            </Grid>
                            <Grid  xs={3}>
                                <Item>
                                <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>  
                                </Item>
                            </Grid>
                            <Grid  xs={12} sm={6} md={4} lg={3.5} >
                                <Item>
                                <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
                                </Item>
                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: 6 }}>
                                <Item sx={{ textAlign: 'left' }}> <Typography sx={{ fontSize: '1.2rem', color: 'black' }}>New To Web Development? Start here </Typography></Item>
                                <Card sx={{ minWidth: 500, border: '1px solid black' }}>
                                    <Grid item xs={12} sx={{ backgroundColor: '#EAFDC6', height: '30px', marginBottom: '10px' }}>
                                        <Typography sx={{ textAlign: 'left' }}>Free Course</Typography>                        </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <CardContent sx={{ textAlign: 'left' }}>

                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Learn HTML
                                                </Typography>
                                                <Typography variant="h3" component="div">
                                                    Start at the beginning by learning HTML basics - an important foundation for building and editing web pages.
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={4} sx={{ marginTop: 2 }}>
                                            <img src={pillars} style={{ height: '80%', width: '50%' }}
                                                alt="Description" />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                                        <Grid item xs={6}>
                                            <Typography color="text.secondary"> Beginner Friendly</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">7hours</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>

                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: 12, padding: 6 }}>
                                <Card sx={{ minWidth: 350, border: '1px solid black' }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <CardContent sx={{ textAlign: 'left' }}>

                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Blog Post
                                                </Typography>
                                                <Typography variant="h3" component="div">
                                                    What is Web Development?
                                                </Typography>
                                                <Typography> 1 March 2022</Typography>
                                            </CardContent>
                                        </Grid>

                                    </Grid>

                                </Card>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Webdevelopment;

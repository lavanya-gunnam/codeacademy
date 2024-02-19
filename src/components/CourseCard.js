import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const cardData = [
  {
    title: "Career Path",
    subTitle: "Full-Stack Engineer",
    description: "A full-stack engineer can get a project done from start to finish, back-end to front-end.",
    includes: "51 Courses",
    certification: "Professional Certification",
    beginnerFriendly: "Beginner Friendly",
    hours: "150 hours"
  },
  {
    title: "Career Path",
    subTitle: "Front-End Engineer",
    description: "Front-end engineers work closely with designers to make websites beautiful,functional,and fast.",
    includes: "34 Courses",
    certification: "Professional Certification",
    beginnerFriendly: "Beginner Friendly",
    hours: "115 hours"
  },
  {
    title: "Career Path",
    subTitle: "Back-End Engineer",
    description: "Back-end developers deal with the hidden processes that run behind the scenes,building APIs and databases that power the front-end.",
    includes: "41 Courses",
    certification: "Professional Certification",
    beginnerFriendly: "Beginner Friendly",
    hours: "100 hours"
  },
  {
    title: "Career Path",
    subTitle: "Create a Back-End App with JavaScript",
    description: "Learn how to build back-end web APIs using Express.js,Node.js,SAL,and a Node.js-SQLite database library.",
    includes: "8 Courses",
    certification: "Professional Certification",
    beginnerFriendly: "Beginner Friendly",
    hours: "30 hours"
  },
  {
    title: "Career Path",
    subTitle: "Create a Front-End App with React",
    description: "Learn to build front-end web apps with javascript and React.",
    includes: "9 Courses",
    certification: "Professional Certification",
    beginnerFriendly: "Beginner Friendly",
    hours: "36 hours"
  },
  {
    title: "Career Path",
    subTitle: "Full-Stack Engineer",
    description: "A full-stack engineer can get a project done from start to finish, back-end to front-end.",
    includes: "51 Courses",
    certification: "Professional Certification",
    beginnerFriendly: "Beginner Friendly",
    hours: "150 hours"
  },
  // Add more data for other cards here if needed
];

const CourseCard = () => {
  return (
<>
<Container maxWidth="lg">
    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between'  }}>
    <Grid item xs={12} sm={6} md={2}style={{ textAlign: 'left' }}>
          <Typography  sx={{fontWeight:
          "700",fontSize:"1.125rem",lineHeight:"1.5",paddingTop:"0.1rem",paddingBottom:"o.25rem",marginTop:1}}>
           Filters  <Typography component="span" sx={{ fontWeight: 400,fontSize:"1rem" }}> clearfilters.</Typography> 
          </Typography>
          <Typography sx={{marginTop:1,fontWeight:700,fontSize:"0.875rem"}}>Level</Typography>
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
                            <Typography sx={{marginTop:1,fontWeight:700,fontSize:"0.875rem"}}>Price <a href="/" style={{ textDecoration: 'none',color:"blue" }}>view plans</a></Typography>
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
                            <Typography sx={{marginTop:1,fontWeight:700,fontSize:"0.875rem"}}>Type</Typography>
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
                            <Divider />
                            <Typography sx={{marginTop:1,fontWeight:700,fontSize:"0.875rem"}}>Average time to complete</Typography>
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
                            <Divider />
                            <Typography sx={{marginTop:1,fontWeight:700,fontSize:"0.875rem"}}>Projects</Typography>
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
    </Grid>
    <Grid item xs={12} sm={6} md={10} sx={{marginTop:3}}>
    <Grid container spacing={2} style={{ display: 'flex' }}>
        {cardData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent style={{ textAlign: 'left', backgroundColor: '#1D2340' }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "1.375rem", lineHeight: "0.3", color: "#F5FCFF" }}>
                  {data.title}
                </Typography>
              </CardContent>
              <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "1.375rem", lineHeight: "1.3", paddingBottom: "0.5rem" }}>
                  {data.subTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  {data.description}
                </Typography>
              </CardContent>
              <CardContent style={{ textAlign: 'left' }}>
              <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />
                <span style={{ display: 'inline-block' }}>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: "500", fontSize: "1.1rem", lineHeight: "1.3", paddingBottom: "0.5rem", display: 'inline-block' }}>
                    Includes:
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "1.1rem", lineHeight: "1.3", paddingBottom: "0.5rem", display: 'inline-block' }}>
                    {data.includes}
                  </Typography>
                </span>
                <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />
                <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={12} sm={6} md={1} style={{ textAlign: 'left' }}>
                    <WorkspacePremiumIcon/>
                  {/* <img src={WorkspacePremiumIcon} style={{ height: '30px', width: '31px', maxWidth: '100%', margin: 1 }} alt="LinkedIn"></img> */}
                  </Grid>
                  <Grid item xs={12} sm={6} md={1}>
                    <Typography 
                    sx={{ 
                        fontWeight: "400", 
                        // fontSize: "0.175rem",
                        //  lineHeight: "0.3",
                        //   paddingTop: "0.1rem",
                        //    paddingBottom: "o.25rem", 
                        //    color: "blue" 
                        }}
                    >
                      {/* {data.hours} */} with
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={8}>
                    <Typography 
                    sx={{ 
                        fontWeight: "400", 
                        // fontSize: "0.175rem",
                        //  lineHeight: "0.3",
                        //   paddingTop: "0.1rem",
                        //    paddingBottom: "o.25rem", 
                        //    color: "blue" 
                        }}
                    >
                      {/* {data.hours} */} Professional Certification
                    </Typography>
                  </Grid>
                </Grid>
                <div style={{ borderBottom: '1px dotted black', marginBottom: '0.5rem' }} />
                <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={12} sm={6} md={8} style={{ textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1.5", paddingTop: "0.1rem", paddingBottom: "o.25rem" }}>
                   < SignalCellularAltIcon/>
                      {data.beginnerFriendly}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography 
                    sx={{ 
                        fontWeight: "400", 
                        // fontSize: "0.175rem",
                        //  lineHeight: "0.3",
                        //   paddingTop: "0.1rem",
                        //    paddingBottom: "o.25rem", 
                           color: "black" }}
                    >
                      {data.hours}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
       
    </Grid>
 
  </Grid>
  </Container>
    
      </>

  
  );
};

export default CourseCard;

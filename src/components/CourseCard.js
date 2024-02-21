import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SetData2 from '../redux/actions/actionGetData';
import { connect } from 'react-redux';
import { GetCardData } from '../redux/api/getData';
import { useParams } from 'react-router-dom';






const CourseCard = ({ data2, SetData2 }) => {


  useEffect(() => {
    GettingData();
  }, [])

  const GettingData = async () => {
    const gotIt = await (GetCardData());
    console.log("this is api data in card component", gotIt);
    SetData2(gotIt);
  }

  const param = useParams();
  const routeName = param.id;
  console.log("this is the page of ", routeName);

  const OrignalData = data2;

  const sixCardData = OrignalData.filter((item) => (item.status === routeName))
  console.log(sixCardData, "compair")
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} 
        style={{ display: 'flex', justifyContent: 'space-between' }}
       
        >
          <Grid item xs={12} sm={4} md={2} 
           sx={{ display: { xs: 'none', sm: 'none', md: 'block' }}} >
            <Typography sx={{
              fontWeight:
                "700", fontSize: "1.125rem", lineHeight: "1.5", paddingTop: "0.1rem", paddingBottom: "o.25rem", marginTop: 1
            }}>
              Filters  <Typography component="span" sx={{ fontWeight: 400, fontSize: "1rem" }}> clearfilters.</Typography>
            </Typography>
            <Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem",textAlign:'left' }}>Level</Typography>
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
            <Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem",textAlign:'left' }}>Price <a href="/" style={{ textDecoration: 'none', color: "blue" }}>view plans</a></Typography>
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
            <Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem",textAlign:'left' }}>Type</Typography>
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
              <FormControlLabel control={<Checkbox />} label="course" />

            </FormGroup>
            <Divider />
            <Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem",textAlign:'left' }}>Average time to complete</Typography>
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
            <Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem",textAlign:'left' }}>Projects</Typography>
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

          <Grid item xs={12} sm={12} md={10} sx={{ marginTop: 3 }}>
            <Grid container spacing={2} style={{ display: 'flex' }}>
              {sixCardData.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card style={{ height: '100%' }} sx={{'&:hover':{boxShadow: '-8px 0 0 0 rgba(0,0,0,1), 0 5px 0 0 rgba(0,0,0,1)',}}}>
                    <CardContent style={{ textAlign: 'left', backgroundColor: '#1D2340' }}>
                      <Typography variant="h5" component="h2" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "0.3", color: "#F5FCFF" }}>
                        {data.title}
                      </Typography>
                    </CardContent>
                    
                    <CardContent style={{ textAlign: 'left', height: '150px' }}> {/* Adjust the height value as needed */}
                      <Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "1.25rem", lineHeight: "1.3", paddingBottom: "0.5rem" }}>
                        {data.subTitle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                        {data.description}
                      </Typography>
                    </CardContent>

                    <CardContent style={{ textAlign: 'left' }}>
                      <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />
                      <span style={{ display: 'inline-block' }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.3", paddingBottom: "0.5rem", display: 'inline-block' }}>
                          Includes:
                        </Typography>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "0.875rem", lineHeight: "1.3", paddingBottom: "0.5rem", display: 'inline-block' }}>
                          {data.includes}
                        </Typography>
                      </span>
                      <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />
                      <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item xs={1} sm={1} md={1} style={{ textAlign: 'left' }}>
                          <WorkspacePremiumIcon />
                         
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                          <Typography
                            sx={{
                              fontWeight: "400",
                            }}
                          >
                            {/* {data.hours} */} with
                          </Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9}>
                          <Typography
                            sx={{
                              fontWeight: "400",
                            }}
                          >
                            {/* {data.hours} */} Professional Certification
                          </Typography>
                        </Grid>
                      </Grid>
                      <div style={{ borderBottom: '1px dotted black', marginBottom: '0.5rem' }} />
                      <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item xs={8} sm={6} md={8} style={{ textAlign: 'left' }}>
                          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 600 }}> < SignalCellularAltIcon />  {data.beginnerFriendly}</Typography>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4}>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "0.875rem",
                              color: "black"
                            }}
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

const mapStateToProps = state => {
  return {
    data2: state.Reducer2.data2,
  }
}

const mapDispatchToProps = {
  SetData2,
}




export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);

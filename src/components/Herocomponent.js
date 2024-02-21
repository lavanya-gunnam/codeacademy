import React from "react";
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import image from '../../src/images/image.png';
import icons from '../../src/images/icons.png';
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff0e5' : '#fff0e5',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Herocomponent() {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: '#fff0e5' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <Item sx={{ marginTop: 15 }}>
              <Typography variant="h1">Skillsoft’s Codecademy</Typography>
              <Typography variant="h2">Build a tech-forward team with training that sticks</Typography>
              <Typography sx={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3' }}>Level up and level set your team’s technical skills with the most interactive training for programming and data skills.</Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={8}>
            <Item sx={{ marginTop: 2, marginBottom: 2 }}>
              <img src={icons}
                style={{ height: '30%', width: '80%' }}
                alt="Description" /></Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            {/* <Item> <img src={image} style={{ height: '500px', width: '500px' }} alt="Description" /></Item> */}
          </Grid>
        </Grid>
      </Box>

    </>

  );
}

export default Herocomponent;

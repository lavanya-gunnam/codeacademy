import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import image from '../../src/images/image.png';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import mobile1 from '../../src/images/mobile1.png';
import mobile2 from '../../src/images/mobile2.png';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff0e5' : '#fff0e5',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Footer = () => {
  const CustomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    textAlign: "left",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: 7,
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "1rem",
    textAlign: "center",
    color: "black",
    fontWeight: "",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  }));


  return (
    <>
      <Box sx={{ py: 5 }}>

        <CustomContainer>
          <Box >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                // textAlign:"left",
                mb: 2,
              }}
            > Company
            </Typography>

            <FooterLink>About</FooterLink>
            <br />
            <FooterLink>Careers</FooterLink>
            <br />
            <FooterLink>Affiliates</FooterLink>
            <br />


            <IconBox >
              <TwitterIcon />
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </IconBox>



          </Box>

          <Box >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Articles</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
            <br />
            <FooterLink>Cheatsheets</FooterLink>
            <br />
            <FooterLink>Codechallenges</FooterLink>
            <br />
            <FooterLink>Docs</FooterLink>
            <br />
          </Box>
          <Box >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Plans
            </Typography>

            <FooterLink>For individuals</FooterLink>
            <br />
            <FooterLink>For students</FooterLink>
            <br />
            <FooterLink>For teams</FooterLink>
            <br />
            <FooterLink>Discounts</FooterLink>
            <br />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem style={{ borderColor: 'black' }} />
          <Box >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Subjects
            </Typography>

            <FooterLink>Web Design</FooterLink>
            <br />
            <FooterLink>Web Development</FooterLink>
            <br />
            <FooterLink>Devops</FooterLink>
            <br />
            <FooterLink>Dtavisualization</FooterLink>
            <br />
          </Box>

          <Box >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Languages
            </Typography>
            <FooterLink>HTML&CSS</FooterLink>
            <br />
            <FooterLink> Java  </FooterLink>
            <br />
            <FooterLink> Javascript </FooterLink>
            <br />
            <FooterLink>React  </FooterLink>
            <br />
            <FooterLink>Ruby  </FooterLink>
            <br />
          </Box>
          <Box >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Career building
            </Typography>

            <FooterLink>Career paths</FooterLink>
            <br />
            <FooterLink>Career center</FooterLink>
            <br />
            <FooterLink>Interview prep</FooterLink>
            <br />
            <FooterLink>Professional certification</FooterLink>
            <br />
            <Typography sx={{ marginTop: 2, fontSize: '1rem', fontWeight: 'bold' }}>Mobile</Typography>
            <br />
            <FooterLink><img src={mobile1} style={{ height: '50px', width: '120px' }} ></img></FooterLink>
            <br />
            <FooterLink><img src={mobile2} style={{ height: '50px', width: '114px' }} ></img></FooterLink>
            <br />
          </Box>
        </CustomContainer>

      </Box>
      <Box sx={{ backgroundColor: '#fff0e5' }} >
        <Container maxWidth="lg">

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item sx={{ textAlign: 'left' }}>
                <img src={image} style={{ height: '50px', width: '108px' }} ></img>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: '100', lineHeight: '0.1' }}>from skillsoft </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                {/* <Divider orientation="Horizontal" variant="middle" flexItem style={{ borderColor: 'black' }} /> */}
                <Divider style={{ borderColor: 'black', marginBottom: 3 }} />
              </Item>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5} sx={{ marginTop: "5px" }}>
                  <Item sx={{ textAlign: 'left' }}>

                    {/* <Typography sx={{ fontSize: '0.8rem', fontWeight: '400', lineHeight: '0.1',color:'black','&:hover': { color:'blue', cursor: 'pointer' } }}>Privacy Policy | Cookie Policy | Do Not Sell My Personal Information |Terms </Typography> */}
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: '400', lineHeight: '1.2', color: 'black', }}>Privacy Policy | Cookie Policy | Do Not Sell My Personal Information |Terms</Typography>
                  </Item>
                </Grid>
                <Grid item xs={2} md={2}>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <Item sx={{ textAlign: 'left' }}>

                    <Typography sx={{ fontSize: '0.8rem', fontWeight: '400', lineHeight: '0.1', color: 'black', '&:hover': { color: 'blue', cursor: 'pointer' } }}>Made with
                      <span style={{ verticalAlign: 'middle' }}><FavoriteRoundedIcon sx={{ color: 'red', width: 15 }} /> </span>in NYC © 2024 Codecademy </Typography>
                  </Item>
                </Grid>
              </Grid>

            </Grid>
          </Grid>

        </Container>
      </Box>
    </>
  );
};

export default Footer;


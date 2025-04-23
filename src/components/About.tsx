"use client"

import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Image from "next/image";
import mybigimg from "../../public/mebig.jpg";
import * as motion from "motion/react-client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation repeats every time element comes into view
    });
  }, []);


  return (
    <div className="aboutsection" id="about">
      <div className="aboutdetils">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <div className="aboutone" data-aos="fade-right">
                  <div className="imgone">
                    <Image
                      src={mybigimg}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <div className="abouttwo" data-aos="fade-left">
                  <Typography variant="h4" gutterBottom>
                    About Me
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Hi! I am Ranajay Saha, a UI Developer. I have 1 Year of
                    Experience in this field. Since I have been passionate about
                    design and art. I grew up with the Internet and naturally
                    took a path according to this passion. Web Development is a
                    way for me to keep track of all my passions.
                  </Typography>
                  <div className="infoparentbx">
                    <div className="infbxone">
                      <div className="infobx">
                        <Typography variant="h6" gutterBottom>
                          Name
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Ranajay Saha
                        </Typography>
                      </div>
                      <div className="infobx">
                        <Typography variant="h6" gutterBottom>
                          Email
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          sahajay426@gmail.com
                        </Typography>
                      </div>
                      <div className="infobx">
                        <Typography variant="h6" gutterBottom>
                          Phone
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          9804771533
                        </Typography>
                      </div>
                    </div>
                    <div className="infbxone infobxtwo">
                      <div className="infobx">
                        <Typography variant="h6" gutterBottom>
                          Address
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          1/11 C East Mall Road
                        </Typography>
                      </div>
                      <div className="infobx">
                        <Typography variant="h6" gutterBottom>
                          Degree
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          B.COM
                        </Typography>
                      </div>
                      <div className="infobx">
                        <Typography variant="h6" gutterBottom>
                          Freelance
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Available
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <a href="./Ranajay Saha.pdf" target="_blank">
                    <motion.button className="mybtn" whileTap={{ scale: 0.8 }}>
                      Download CV
                    </motion.button>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default About;

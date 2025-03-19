'use client';

import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Grid from "@mui/material/Grid2";
import HomeIcon from '@mui/icons-material/Home';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation repeats every time element comes into view
    });
  }, []);

  return (
    <div className="contatsection" id="contact">
      <div className="heading" style={{ paddingTop: "9%" }}>
        <Typography variant="h6" gutterBottom>
          Ways to  <span>Contact Us</span>
        </Typography>
      </div>

      <div className="contactbx">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
                <div className="icontext" >
                  <div className="icon">
                    <HomeIcon />
                  </div>
                  <div className="texts">
                    <Typography variant="h5" gutterBottom>
                      Address
                    </Typography>
                    <span>1/11 C East Mall Road</span>
                  </div>
                </div>
                <div className="icontext">
                  <a href="mailto:sahajay426@gmail.com">
                    <div className="icon">
                      <MarkEmailReadIcon />
                    </div>
                  </a>
                  <div className="texts">
                    <Typography variant="h5" gutterBottom>
                      Email
                    </Typography>
                    <span>sahajay426@gmail.com</span>
                  </div>
                </div>

                <div className="icontext">

                  <a href="tel:9804771533">
                    <div className="icon">
                      <PhoneInTalkIcon />
                    </div>
                  </a>
                  <div className="texts">
                    <Typography variant="h5" gutterBottom>
                      Phone
                    </Typography>
                    <span>9804771533</span>
                  </div>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}  data-aos="fade-left">
                <form action="https://formspree.io/f/mpwpzolb" method="POST">
                  <div className="boxone">
                    <input type="text" placeholder="Your Name" name="name" autoComplete="off" required />
                    <input type="email" placeholder="Your Email" name="email" autoComplete="off" required />
                  </div>
                  <div className="boxone">
                    <input type="phone" placeholder="Your Phone" name="Phone" autoComplete="off" required />
                    <input
                      type="text"
                      placeholder="Your Subject"
                      name="Subject"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="boxone">
                    <textarea
                      id=""
                      placeholder="Write Your Message hare"
                      name="message"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <button className="mybtn" type="submit">
                    Submit Now
                  </button>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Contact;

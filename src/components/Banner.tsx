"use client"

import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import mybigimg from "../../public/me.jpg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation happens only once
    });
  }, []);


  return (
    <div className="banner" id="home">
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 12 }}>
            <div className="bannercontainer">
              <div className="icon icon1"><img src="./nextjsicon.png"/></div>
              <div className="icon icon2"><img src="./varcelicon.png"/></div>
              <div className="icon icon3"><img src="./nicon1.png"/></div>
              <div className="icon icon4"><img src="./reacticon.png"/></div>
              <div className="icon icon5"><img src="./jsicon.png"/></div>
              <div className="icon icon6"><img src="./nicon2.png"/></div>
              <div className="icon icon7"><img src="./nicon3.png"/></div>
              <div className="profileimg">
                <Image
                  src={mybigimg}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <h1>Ranajay Saha</h1>
              <h3  data-aos="fade-up">
                CREATIVE <br />
                DEVELOPER
              </h3>
              <div className="para">
                <p >
                A passionate UI and Front-End Developer based In Kolkata, India
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;

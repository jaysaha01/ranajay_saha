import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import mybigimg from "../../public/me.jpg";
import Image from "next/image";


const Banner = () => {
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
              <div className="icon icon1"></div>
              <div className="icon icon2"></div>
              <div className="icon icon3"></div>
              <div className="icon icon4"></div>
              <div className="icon icon5"></div>
              <div className="icon icon6"></div>

              <div className="profileimg">
                <Image
                  src={mybigimg}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <h1>Ranajay Saha</h1>
              <h3>
                CREATIVE <br />
                DEVELOPER
              </h3>
              <div className="para">
                <p>
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

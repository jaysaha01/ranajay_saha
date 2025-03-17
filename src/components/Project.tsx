"use client"

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Projectcard from "./Projectcard";

interface Projectintrface {
  id: number;
  name: string;
  description: string;
  thumbnil: string;
  images: string[];
  link: string;
}

const projectDb: Projectintrface[] = [
  {
    id: 0,
    name: "Suruchi Sangha",
    description:
      "I redesigned the landing page for Suruchi Sangha, a traditional Puja club, to create a modern, visually appealing, and user-friendly website. The goal was to enhance the user experience while maintaining the cultural and spiritual essence of the organization.",
    thumbnil: "https://lh3.googleusercontent.com/p/AF1QipNBg45vj6zzDugWA3A-QUVOGCgEwjZSmXFBHRpP=s680-w680-h510",
    images: [
      "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      "https://icon.icepanel.io/Technology/svg/Sass.svg",
      "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    ],
    link: "https://jaysaha01.github.io/suruchisangha_landingpage/",
  },
  {
    id: 1,
    name: "Ayelet Montessori House of Children",
    description:
      "Ayelet Montessori is a nurturing House of Children founded by passionate parents and educators who deeply believe in the transformative power of **Dr. Maria Montessori.",
    thumbnil: "https://ayeletmontessori.com/img/topban.jpg",
    images: [
      "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      "https://icon.icepanel.io/Technology/svg/Sass.svg",
      "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    ],
    link: "https://ayeletmontessori.com/",
  },
  {
    id: 2,
    name: "Marko & Brando",
    description:
      "Marko & Brando, a Kolkata-based digital marketing firm since 2017, drives online success with tailored strategies. From SEO to social media, we innovate to elevate your brand. Let’s achieve remarkable results together!",
    thumbnil: "https://www.markobrando.com/asset/image/whitmail4.webp",
    images: [
      "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      "https://icon.icepanel.io/Technology/svg/Sass.svg",
      "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    ],
    link: "https://www.markobrando.com/",
  },
  {
    id: 3,
    name: "Niavara",
    description:
      "Experience ultra-luxe living at Kolkata’s tallest luxury condominium. Sky-kissing balconies, 3-side open apartments, and global standards redefine elegance. Elevate your lifestyle with unmatched comfort and sophistication.",
    thumbnil: "https://jaysaha01.github.io/niavara/img/abutus.jpg",
    images: [
      "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      "https://icon.icepanel.io/Technology/svg/Sass.svg",
      "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    ],
    link: "https://jaysaha01.github.io/niavara/",
  },
  {
    id: 4,
    name: "Orbit Tarang",
    description:
      "Homexperts, with years of real estate excellence in Kolkata, transforms dreams into reality. Our expert team understands local markets, trends, and unique needs, crafting your perfect home with care and precision.",
    thumbnil: "https://jaysaha01.github.io/orbittarang/img/gal14.png",
    images: [
      "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      "https://icon.icepanel.io/Technology/svg/Sass.svg",
      "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    ],
    link: "https://jaysaha01.github.io/niavara/",
  },
  {
    id: 5,
    name: "Getafix Solutions",
    description:
      "Getafix Solutions delivers unmatched construction services with a focus on timely, budget-friendly projects. A trendsetter in project management, we prioritize customer delight and excellence, setting new industry standards.",
    thumbnil: "https://jaysaha01.github.io/getafix-solutions/images/home%20img/gthateen.jpg",
    images: [
      "https://icon.icepanel.io/Technology/svg/HTML5.svg",
      "https://icon.icepanel.io/Technology/svg/Sass.svg",
      "https://icon.icepanel.io/Technology/svg/jQuery.svg",
    ],
    link: "https://jaysaha01.github.io/getafix-solutions/",
  }
];

const Project = () => {
  return (
    <div className="projectsection" id="projects">
      <div className="heading" style={{ paddingTop: "9%" }}>
        <Typography variant="h6" gutterBottom>
          A Glimpse at <span>Recent Projects</span>
        </Typography>
      </div>

      <div className="projectbx">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {projectDb.map((elm) => (
                <Grid size={{ xs: 12, md: 4 }} key={elm?.id}>
                  <Projectcard mydata={elm} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Project;

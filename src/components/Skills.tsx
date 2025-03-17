"use client"

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Skillcard from "./Skillcard";
import Grid from "@mui/material/Grid2";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { IconType } from "react-icons";

const Skills = () => {
  interface Skillintrface {
    id: number;
    logo: IconType;
    name: string;
    description: string;
  }

  const skillsDb: Skillintrface[] = [
    {
      id: 0,
      name: "HTML",
      logo: FaHtml5,
      description:
        "HTML is the standard language for creating and structuring web pages. It uses tags to define elements like headings, paragraphs, links, images, and more, forming the backbone of all websites.",
    },
    {
      id: 1,
      name: "CSS",
      logo: FaCss3Alt,
      description:
        "CSS (Cascading Style Sheets) is a styling language used to control the layout, design, and appearance of web pages, making HTML elements visually appealing and responsive across devices.",
    },
    {
      id: 2,
      name: "JavaScript",
      logo: FaJs,
      description:
        "JavaScript (JS) is a programming language that adds interactivity, dynamic behavior, and functionality to websites, enabling features like animations, form validation, and real-time updates.",
    },
    {
      id: 3,
      name: "React",
      logo: FaReact,
      description:
        "A JavaScript library for building dynamic, component-based user interfaces, enabling efficient and reusable UI development.",
    },
    {
      id: 4,
      name: "Next.js",
      logo: SiNextdotjs,
      description:
        "A React framework with server-side rendering, static site generation, and seamless routing for scalable web apps.",
    },
    {
      id: 5,
      name: "SCSS",
      logo: FaSass,
      description:
        "A CSS preprocessor with features like variables, nesting, and mixins for cleaner and more maintainable styles.",
    },
    {
      id: 6,
      name: "Bootstrap",
      logo: FaBootstrap,
      description:
        "A front-end framework with pre-designed components and responsive grids for rapid, mobile-friendly web development.",
    },
    {
      id: 7,
      name: "MUI",
      logo: SiMui,
      description:
        "A React component library following Material Design principles, offering customizable and ready-to-use UI elements.",
    },
  ];

  return (
    <div className="skillsection" style={{ paddingTop: "9%" }} id="skills">
      <div className="heading">
        <Typography variant="h6" gutterBottom>
          A selection of <span>Skills</span>
        </Typography>
      </div>

      <div className="skillcards">
        <div className="skiicard">
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {skillsDb.map((elm,index) => {
                  return (
                  
                      <Grid size={{ xs: 12, md: 4 }} key={index+"skill"}>
                        <Skillcard mydata={elm} />
                      </Grid>
                    
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Skills;

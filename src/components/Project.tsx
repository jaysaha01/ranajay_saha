"use client"

import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Projectcard from "./Projectcard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface Projectintrface {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
}


const Project = () => {

   const [mySkills, setMySkills] = useState<Projectintrface[] | []>([]);
  
    async function fetchProject() {
      try {
        const myProjects = await client.fetch(groq`*[_type=="myproject"]`);
        setMySkills(myProjects)
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
  
    useEffect(() => {
      fetchProject();
    }, []);


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
              {mySkills.map((elm) => (
                <Grid size={{ xs: 12, md: 4 }} key={elm?.id+"project"}>
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

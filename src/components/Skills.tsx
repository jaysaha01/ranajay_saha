"use client"

import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Skillcard from "./Skillcard";
import Grid from "@mui/material/Grid2";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface SkillInterface {
  id: string;
  description: string;
  title: string;
  image?: { asset: { _ref: string } };
}


const Skills = () => {

  const [mySkills, setMySkills] = useState<SkillInterface[] | []>([]);


  async function fetchSkills() {
    try {
      const myskills = await client.fetch(groq`*[_type=="project"]`);
      setMySkills(myskills)
      
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    fetchSkills();
  }, []);


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
                {mySkills?.map((elm) => {
                  return (
                      <Grid size={{ xs: 12, md: 4 }} key={elm.id + "skills"+ 'fdsf'}>
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

"use client"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconType } from "react-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 interface Skillintrface {
    id: number;
    logo: IconType;
    name: string;
    description: string;
  }

interface SkillsProps {
  mydata: Skillintrface;
}

const Skillcard: React.FC<SkillsProps> = ({ mydata }) => {

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false, // Animation repeats every time element comes into view
      });
    }, []);

  return (
    <div
      style={{
        border: "2px solid transparent",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Card sx={{ minWidth: 275 }} className="skillcard" data-aos="fade-up">
        <CardContent>
          <div className="iconbx">
            {<mydata.logo/>}
          </div>

          <Typography variant="h5">{mydata.name}</Typography>
          <Typography variant="body1">
            {
              mydata.description
            }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skillcard;

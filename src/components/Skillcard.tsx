"use client"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { urlFor } from "@/sanity/lib/image";

interface SkillInterface {
  id: string;
  description: string;
  title: string;
  image?: { asset: { _ref: string } };
}

interface SkillsProps {
  mydata: SkillInterface;
}

const Skillcard: React.FC<SkillsProps> = ({ mydata }) => {

  const { title, description, image } = mydata;

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false, // Animation repeats every time element comes into view
      });
    }, []);

   const imageUrl = image?.asset?._ref
       ? urlFor(image.asset._ref).width(300).height(300).url()
       : "/default-image.jpg"; 

    

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
            <img src={imageUrl}/>
          </div>

          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">
            {
              description.slice(0,100) + "..."
            }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skillcard;

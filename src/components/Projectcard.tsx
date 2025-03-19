"use client";
import { Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Projectintrface {
  id: number;
  name: string;
  description: string;
  thumbnil: string;
  images: string[];
  link: string;
}

interface ProjectProps {
  mydata: Projectintrface;
}

const Projectcard: React.FC<ProjectProps> = ({ mydata }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation repeats every time element comes into view
    });
  }, []);

  return (
    <div className="projectcard" data-aos="fade-up">
      <div className="imgplaceholder">
        <img src={mydata.thumbnil} alt="" />
      </div>

      <div className="infoproject">
        <Typography variant="h6" gutterBottom>
          {mydata.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {mydata.description}
        </Typography>
      </div>

      <div className="navigateinfo">
        <div className="infone">
          <AvatarGroup spacing="medium">
            {mydata.images.map((elm, i) => {
              return (
                <Avatar
                  alt="Remy Sharp"
                  src={elm}
                  sx={{ backgroundColor: "#4b4269" }}
                  key={i + "keys"}
                />
              );
            })}
          </AvatarGroup>
        </div>
        <div className="infotwo">
          <a href={mydata.link}>Check Live Site &#8599;</a>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;

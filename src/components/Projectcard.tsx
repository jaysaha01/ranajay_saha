import { Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

interface Projectintrface {
  id: number;
  name: string;
  description: string;
  thumbnil:string;
  images: string[];
  link: string;
}

interface ProjectProps {
  mydata: Projectintrface;
}

const Projectcard: React.FC<ProjectProps> = ({ mydata }) => {
  return (
    <div className="projectcard">
      <div className="imgplaceholder">
        <img
          src={mydata.thumbnil}
          alt=""
        />
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
          <AvatarGroup spacing="medium" >
            {
              mydata.images.map((elm,i)=>{
                return(
                  
                  <Avatar alt="Remy Sharp" src={elm} sx={{backgroundColor:"#4b4269"}} key={i+"keys"}/>
                 
                )
              })
            }
            
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

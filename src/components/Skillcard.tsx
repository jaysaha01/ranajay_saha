import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconType } from "react-icons";

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
  return (
    <div
      style={{
        border: "2px solid transparent",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Card sx={{ minWidth: 275 }} className="skillcard">
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

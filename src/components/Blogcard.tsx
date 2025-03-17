import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface BlogInterface {
  _id: string;
  content?: unknown;
  description: string;
  title: string;
  image?: { asset: { _ref: string } };
  slug: { current: string };
}

interface ProjectProps {
  blog: BlogInterface;
}

const Blogcard: React.FC<ProjectProps> = ({ blog }) => {
  const { title, description, image, slug } = blog;

  
  const imageUrl = image?.asset?._ref
    ? urlFor(image.asset._ref).width(300).height(300).url()
    : "/default-image.jpg"; // Provide a fallback image

  return (
    <Link href={`/blog/${slug.current}`} >
      <Card  className="blogcard">
        <CardMedia sx={{ height: 240 }} image={imageUrl} title={title} className="bloghader"/>
        <CardContent className="blogcontent">
         
          <h5>{title}</h5>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Blogcard;

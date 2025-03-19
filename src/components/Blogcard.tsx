"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import { TypedObject } from "@portabletext/types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogInterface {
  _id: string;
  content?: TypedObject[]; // ✅ Ensure it's the same everywhere
  description: string;
  title: string;
  image?: { asset: { _ref: string } };
  slug: { current: string };
}

interface ProjectProps {
  blog: BlogInterface;
}

const Blogcard: React.FC<ProjectProps> = ({ blog }) => {

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false, // Animation repeats every time element comes into view
      });
    }, []);

  const { title, description, image, slug } = blog;

  const imageUrl = image?.asset?._ref
    ? urlFor(image.asset._ref).width(300).height(300).url()
    : "/default-image.jpg"; // Provide a fallback image

  return (
    <Link href={`/blog/${slug.current}`} data-aos="fade-up">
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

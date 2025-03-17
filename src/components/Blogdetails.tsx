"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Sblogcard from "./Sblogcard";
import Link from "next/link";

interface BlogInterface {
  _id: string;
  content?: any;
  description: string;
  title: string;
  image?: { asset: { _ref: string } };
  slug: { current: string };
}

interface ProjectProps {
  myblogs?: BlogInterface[]; // ✅ Prevent undefined errors
  slug: string;
}

const Blogdetails: React.FC<ProjectProps> = ({ myblogs = [], slug }) => {
  if (!myblogs || myblogs.length === 0) {
    return <h2>Loading blogs...</h2>; // ✅ Show a loading message instead of breaking
  }

  const blog = myblogs.find((b) => b.slug.current === slug);

  if (!blog) {
    return <h2>Blog not found</h2>; // ✅ Prevent crashes if the blog is missing
  }

  const imageUrl = blog.image?.asset?._ref
    ? urlFor(blog.image.asset._ref).width(800).height(500).url()
    : "/default-image.jpg"; // ✅ Fallback image

  return (
    <div className="blogbx">
      <div className="titlebx">
        <h1>{blog.title}</h1>
      </div>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div className="blogstory">
                <div className="imgbx">
                  <img src={imageUrl} alt={blog.title} />
                </div>
                <Typography variant="h6">{blog.description}</Typography>
                <PortableText value={blog.content} />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="blogdetailsec">
                {myblogs.map((elm) => (
                  <Link key={elm._id} href={`/blog/${elm.slug.current}`} passHref>
                    <Sblogcard blog={elm} />
                  </Link>
                ))}
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Blogdetails;

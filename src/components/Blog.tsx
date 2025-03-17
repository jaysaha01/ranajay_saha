"use client";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import Blogcard from "./Blogcard";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Cardloading from "./Cardloading";

// Define the TypeScript interface for blog data
interface BlogInterface {
    _id: string;
    content?: unknown; 
    description: string;
    title: string;
    image?: { asset: { _ref: string } };
    slug: { current: string };
}


const Blog = () => {
    const [myBlog, setMyBlog] = useState<BlogInterface[]>([]);

    async function fetchBlog() {
        try {
            const blogs = await client.fetch(groq`*[_type=="blog"]`);

            setTimeout(() => {
                setMyBlog(blogs);
            }, 2000);
            
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, []);

    if(myBlog.length === 0){
        return <Cardloading/>
    }

    return (
        <div className="projectsection" id="blogs">
            <div className="heading" style={{ paddingTop: "9%" }}>
                <Typography variant="h6" gutterBottom>
                    A Glimpse at <span>Blog</span>
                </Typography>
            </div>

            <div className="projectbx">
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {myBlog.map((elm, i) => (
                                <Grid size={{ xs: 12, md: 4 }} key={i + "blog"}>
                                    <Blogcard blog={elm} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </div>
        </div>
    );
};

export default Blog;

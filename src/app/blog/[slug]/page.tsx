"use client";

import React, { useEffect, useState } from "react";
import Blogdetails from "@/components/Blogdetails";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { useParams } from "next/navigation";

const Page = () => {
  interface BlogInterface {
    _id: string;
    content?: any;
    description: string;
    title: string;
    image?: { asset: { _ref: string } };
    slug: { current: string };
  }

  const [blogs, setMyblogs] = useState<BlogInterface[]>([]);
  const params = useParams(); // Get URL parameters
  const slug = params?.slug as string; // ✅ Ensure slug is always a string

  async function fetchBlog() {
    try {
      const blogs = await client.fetch(groq`*[_type=="blog"]`);
      setMyblogs(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <Blogdetails myblogs={blogs} slug={slug} />
    </div>
  );
};

export default Page;

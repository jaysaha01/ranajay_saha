import React from "react";
import { urlFor } from "@/sanity/lib/image";

interface BlogInterface {
  _id: string;
  title: string;
  image?: { asset: { _ref: string } };
  slug: { current: string };
}

interface SblogcardProps {
  blog: BlogInterface;
}



const Sblogcard: React.FC<SblogcardProps> = ({ blog }) => {

    const imageUrl = blog.image?.asset?._ref
    ? urlFor(blog.image.asset._ref).width(800).height(500).url()
    : "/default-image.jpg"; // ✅ Fallback image
  return (
    <div className="sblogcard">
      <div className="sblogone">
      <img src={imageUrl} alt={blog.title} />
      </div>
      <div className="sblogtwo">
        <p>{blog.title}</p>
      </div>
    </div>
  );
};

export default Sblogcard;

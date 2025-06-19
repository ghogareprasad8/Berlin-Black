import React from "react";
import BlogSection from "../components/BlogSection";

const Blog = () => {
  return (
    <div className="min-h-screen px-4 md:px-12 py-12">
      <h1 className="text-4xl font-bold mb-8 uppercase text-center tracking-widest">
        Blog
      </h1>
      <BlogSection />
    </div>
  );
};

export default Blog;

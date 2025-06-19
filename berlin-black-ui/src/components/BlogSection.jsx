import React from "react";
import defaultBlogImg from "../assets/blogs/B1.png"; // fallback image

const BlogSection = ({ title, summary, image }) => {
  const blogImage = image || defaultBlogImg;

  return (
    <div style={styles.card}>
      <img
        src={blogImage}
        alt={title}
        style={styles.image}
      />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.summary}>{summary}</p>
      <a href="#" style={styles.link}>Read more</a>
    </div>
  );
};

const styles = {
  card: {
    width: "320px",
    backgroundColor: "#111",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "left",
    boxShadow: "0 0 10px rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
  },
  summary: {
    fontSize: "14px",
    color: "#ccc",
    lineHeight: "1.5",
  },
  link: {
    fontSize: "13px",
    color: "#999",
    textDecoration: "underline",
    alignSelf: "flex-start",
    cursor: "pointer",
  },
};

export default BlogSection;

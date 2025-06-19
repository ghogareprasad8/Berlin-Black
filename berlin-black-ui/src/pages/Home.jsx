import React from "react";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import BlogSection from "../components/BlogSection";
import p1 from "../assets/Products/T1.png"; // Default product image
import a1 from "../assets/Products/A1.png"; // Optional alt product image
import B1 from "../assets/blogs/B1.png"; // Blog image 1
import B2 from "../assets/blogs/B2.png"; // Blog image 2  '
import B3 from "../assets/blogs/B3.png"; // Blog image 3

class Home extends React.Component {
  render() {
    return (
      <div style={styles.page}>
        {/* Hero Section */}
        <HeroBanner />

        {/* Main Content */}
        <div style={styles.centeredContainer}>
          <h2 style={styles.sectionTitle}>Just Dropped</h2>
          <div style={styles.grid}>
            <ProductGrid name="Blvck Classic Tee" price={75} image={p1} />
            <ProductGrid name="Blvck Shadow Cap" price={40} image={a1} />
          </div>

          <h2 style={styles.sectionTitle}>Latest Blog Posts</h2>
          <div style={styles.grid}>
            <BlogSection title="Berlin x Antaraal" summary="Announcing today the launch of the third drop of the highly
anticipated BB x ANTARAAL collection, showcasing the latest
monochromatic artworks from the lifestyle brand...." image={B1} />
            <BlogSection title="Berlin Black X Shadow Concept" summary="BerlinBlack x Shadow - A Fusion of Swedish Luxury and Parisian
Elegance Following the resounding success of their first collaboration,
Golden Concept, the Swedish leader..." image={B2} />
            <BlogSection title="Stranger Things x BBlvck" summary="Berlin Black Collaborates with Duffers Bros. Discovery Global 
            Consumer Products on Exclusive Stranger things-Inspired Collection 
            Berlin Black, the luxury lifestyle brand known for its minimalist..." image={B3} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  page: {
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    paddingTop: "238px", // ✅ pushes everything below header
  },
  centeredContainer: {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  sectionTitle: {
    fontSize: "20px",
    margin: "40px 0 20px 0",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default Home;

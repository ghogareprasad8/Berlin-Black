import React from "react";
import heroImage from "../assets/Images/hero-main.png"; // Make sure the path is correct

const HeroBanner = () => {
  return (
    <section style={styles.banner}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>READY TO WEAR</h1>
        <button style={styles.button}>EXPLORE THE MAISON'S COLLECTIONS</button>
      </div>
    </section>
  );
};

const styles = {
  banner: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "20px 40px",
    borderRadius: "6px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "12px",
    letterSpacing: "1px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "bold",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default HeroBanner;

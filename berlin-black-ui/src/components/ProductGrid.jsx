import React from "react";
import p1 from "../assets/Products/T1.png"; // Default fallback
import a1 from "../assets/Products/A1.png"; // Optional alt fallback

const ProductGrid = ({ name, price, image }) => {
  // If image is not provided, fallback to p1 by default
  const productImage = image || p1 || a1;

  return (
    <div style={styles.card}>
      <img
        src={productImage}
        alt={name}
        style={styles.image}
      />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>${price}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "240px",
    backgroundColor: "#111",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    flex: "0 1 240px", // responsive grid behavior
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "12px",
  },
  name: {
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  price: {
    fontSize: "13px",
    color: "#bbb",
  },
};

export default ProductGrid;

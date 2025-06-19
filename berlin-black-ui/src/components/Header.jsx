import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import logo from "../assets/images/BB_Logo.png";

class Header extends React.Component {
  render() {
    return (
      <div style={styles.headerContainer}>
        {/* Logo */}
        <img src={logo} alt="Berlin Black" style={styles.logo} />

        {/* Left icons */}
        <div style={styles.leftIcons}>
          <FaBars style={styles.icon} />
          <FaSearch style={styles.icon} />
        </div>

        {/* Right icons */}
        <div style={styles.rightIcons}>
          <FaUser style={styles.icon} />
          <FaShoppingBag style={styles.icon} />
        </div>

        {/* Navigation Bar */}
        <div style={styles.navbar}>
          <nav style={styles.navLinks}>
            <Link to="/men" style={styles.link}>Men</Link>
            <Link to="/women" style={styles.link}>Women</Link>
            <Link to="/collections" style={styles.link}>Collections</Link>
            <Link to="/blog" style={styles.link}>Blog</Link>
            <Link to="/cart" style={styles.link}>Cart</Link>
          </nav>
        </div>
      </div>
    );
  }
}

const styles = {
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "238px",
    backgroundColor: "#000000",
    color: "#ffffff",
    overflow: "hidden",
    zIndex: 1000,
  },
  logo: {
    position: "absolute",
    width: "116px",
    height: "159px",
    left: "calc(50% - 58px)",
    top: "30px",
  },
  navbar: {
    position: "absolute",
    top: "200px",
    left: 0,
    right: 0,
    height: "53.38px",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftIcons: {
    position: "absolute",
    width: "40px",
    height: "40px",
    left: "40px",
    top: "calc(50% - 20px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  rightIcons: {
    position: "absolute",
    width: "40px",
    height: "40px",
    right: "40px",
    top: "calc(50% - 20px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    gap: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Header;

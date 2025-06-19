import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Top section with links */}
      <div style={styles.top}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Collections</h4>
          <ul style={styles.list}>
            <li>Men</li>
            <li>Accessories</li>
            <li>Collabs</li>
            <li>White</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Information</h4>
          <ul style={styles.list}>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
            <li>Stores</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>More</h4>
          <ul style={styles.list}>
            <li>Wishlist</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>About</li>
            <li>Affiliate Program</li>
            <li>Member</li>
            <li>Wholesale</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Follow us</h4>
          <ul style={styles.iconList}>
            <li><FaTwitter /> Twitter</li>
            <li><FaFacebook /> Facebook</li>
            <li><FaPinterest /> Pinterest</li>
            <li><FaInstagram /> <a href="https://www.instagram.com/berlinblack.in/" style={styles.link}>Instagram</a></li>
            <li><FaTiktok /> TikTok</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr style={styles.divider} />

      {/* Bottom row */}
      <div style={styles.bottom}>
        <div style={styles.dropdownGroup}>
          <div style={styles.dropdown}>
            <label htmlFor="language">LANGUAGE</label>
            <select id="language" style={styles.select}>
              <option>English</option>
            </select>
          </div>
          <div style={styles.dropdown}>
            <label htmlFor="region">COUNTRY/REGION</label>
            <select id="region" style={styles.select}>
              <option>United States (USD $)</option>
            </select>
          </div>
        </div>
        <div style={styles.copyright}>
          Copyright © 2025 Berlin Black
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 24px",
    fontSize: "13px",
    fontFamily: "sans-serif",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  column: {
    flex: "1 1 200px",
    marginBottom: "20px",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: "12px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    color: "#ccc",
  },
  iconList: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    color: "#ccc",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  divider: {
    borderColor: "#222",
    margin: "20px 0",
  },
  bottom: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  dropdownGroup: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  dropdown: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    color: "#ccc",
  },
  select: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "8px",
    border: "1px solid #333",
    borderRadius: "4px",
  },
  copyright: {
    color: "#777",
    marginTop: "10px",
  },
};

export default Footer;

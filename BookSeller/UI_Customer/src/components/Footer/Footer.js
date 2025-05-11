import React from "react";
import "./Footer.scss"; // Import file CSS cho Footer

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} BookStore. All rights reserved.</p>
      <p>Contact: Group12@gmail.com</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    borderTop: "1px solid #ccc",
    marginTop: "2rem",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default Footer;

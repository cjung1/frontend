import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

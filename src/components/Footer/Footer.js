import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <hr className="h-line" />
      <footer className="footer">
        <div className="footer-about-us">
          <h3>About Us</h3>
          <p className="footer-about-us-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ullam animi eligendi ab nobis natus. Illum obcaecati labore id.
          </p>
        </div>
        <div className="footer-categories">
          <h3>Categories</h3>
          <ul>
            <li>Action</li>
            <li>SF</li>
            <li>Drama</li>
            <li>Sport</li>
            <li>Horror</li>
          </ul>
        </div>
        <div className="copyrights">
          <p>@ 2020 All rights reserved | Muri's Movies</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

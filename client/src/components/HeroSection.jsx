import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

import icon from "../assets/icon2.png";

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <img src={icon} alt="mohsin.jpg" />
      {/* <h1>SUPER SAVIOURS</h1> */}
      <p>What if you could save your life with a click?</p>
      <div className="hero-btns">
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;

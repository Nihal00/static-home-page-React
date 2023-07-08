import React from "react";
import '../App.css';
import logoAm from "../images/amazon.png";
import logoFl from "../images/flipkart.png";
import brandlogo from "../images/shoe_image.png";

const Hero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          </p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Avaiable On</p>
          </div>

          <div className="brand-icons">
            <img src={logoAm} alt="logo" />
            <img src={logoFl} alt="logo" />
          </div>
        </div>
        <div className="hero-image">
            <img src={brandlogo} alt="hero-logo"/>
        </div>
      </main>
    </>
  );
};

export default Hero;

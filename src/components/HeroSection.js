import React from "react";
import heroImg from "../images/hero-img.png";
import heroSymbol from "../images/hero-symbol.png";
import Thumbs from "./Thumbs";
export default function HeroSection({ filterByType, setThumbItem, thumbItem }) {
  return (
    <div className="hero-box container">
      <img className="hero-img" src={heroImg} alt="img" />
      <img src={heroSymbol} alt="img" className="hero-symbol" />
      <h1 className="hero-title">
        Temuriylar <br /> Davri <br />
        Adabiyoti
      </h1>
      <Thumbs
        filterByType={filterByType}
        setThumbItem={setThumbItem}
        thumbItem={thumbItem}
      />
    </div>
  );
}

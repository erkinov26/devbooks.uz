import React from "react";
import heroImg from "../../images/hero-img.png";
import heroSymbol from "../../images/hero-symbol.png";
export default function HeroSection() {
  return (
    <div className="hero-box container">
      <img className="hero-img" src={heroImg} alt="img" />
      <img src={heroSymbol} alt="img" className="hero-symbol" />
      <h1 className="hero-title">
        Temuriylar <br /> Davri <br />
        Adabiyoti
      </h1>
    </div>
  );
}

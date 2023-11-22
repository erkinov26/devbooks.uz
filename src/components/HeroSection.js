import React from "react";
import heroImg from "../images/hero-img.png";
import heroSymbol from "../images/hero-symbol.png";
import Thumbs from "./Thumbs";
import HeroTitle from "./HeroTitle";
export default function HeroSection({ filterByType, setThumbItem, thumbItem }) {
  return (
    <div className="hero-box container">
      <img className="hero-img" src={heroImg} alt="img" />
      <img src={heroSymbol} alt="img" className="hero-symbol" />
      <div className="heroCarouselContainer">
        <HeroTitle text={`Temuriylar  Davri Adabiyoti`} />
        <HeroTitle text={`Jadid Davri Adabiyoti`} />
        <HeroTitle text={`Jadid Davri Adabiyoti`} />
        <HeroTitle text={`Jadid Davri Adabiyoti`} />
      </div>

      <Thumbs
        filterByType={filterByType}
        setThumbItem={setThumbItem}
        thumbItem={thumbItem}
      />
    </div>
  );
}

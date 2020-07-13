import React from "react";
import "./Hero.scss";
import HeroCarousel from "../HeroCarousel/HeroCarousel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__sub-text">suspendise - imperdiet felis</div>
      <p className="hero__header">
        Duis Eget <br /> Metus at tellus
      </p>
      <div className="hero__header"></div>
      <HeroCarousel />
      <button className="hero__button">START</button>
    </div>
  );
};

export default Hero;

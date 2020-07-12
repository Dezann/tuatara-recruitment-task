import React from "react";
import "./Hero.scss";
import HeroCarousel from "../HeroCarousel/HeroCarousel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_sub-text">suspendise - imperdiet felis</div>
      <div className="hero__header">Duis Eget</div>
      <div className="hero__header">Metus at tellus</div>
      <HeroCarousel />
      <button className="hero__button">START</button>
    </div>
  );
};

export default Hero;

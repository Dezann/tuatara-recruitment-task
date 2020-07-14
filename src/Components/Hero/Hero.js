import React from "react";
import "./Hero.scss";
import HeroCarousel from "../HeroCarousel/HeroCarousel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="triangle1"></div>
      <div className="triangle2"></div>
      <div className="triangle3"></div>
      <div className="hero__sub-text">suspendise - imperdiet felis</div>
      <p className="hero__header">
        Duis Eget <br /> Metus at tellus
      </p>
      <div className="hero__header"></div>
      <div className="hero-carousel-wrapper">
        <HeroCarousel />
      </div>
      <button className="hero__button">START</button>
    </div>
  );
};

export default Hero;

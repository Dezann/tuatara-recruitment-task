import React from "react";
import "./HeroCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  return (
    <div className="carousel-outer">
      <Carousel>
        <div className="hero-slide">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="hero-slide">
          <p>Slide 2</p>
        </div>
        <div className="hero-slide">
          <p>Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;

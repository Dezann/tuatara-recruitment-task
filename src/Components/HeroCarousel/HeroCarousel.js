import React from "react";
import "./HeroCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  let getCarouselOptions = () => ({
    selectedItem: 1,
  });

  return (
    <div className="carousel-outer">
      <Carousel {...getCarouselOptions()}>
        <div className="hero-slide">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="hero-slide">
          <p>consectetur adipiscing elit consectetur adipiscing elit.</p>
        </div>
        <div className="hero-slide">
          <p>orem ipsum dolor sit amet, consectetur</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;

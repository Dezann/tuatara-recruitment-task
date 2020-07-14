import React from "react";
import "./ContentBlock.scss";
import "../../UtilityComponents/SeeMoreButton/SeeMoreButton";
import SeeMoreButton from "../../UtilityComponents/SeeMoreButton/SeeMoreButton";

const ContentBlock = (props) => {
  return (
    <div
      className="block"
      style={{
        background: `url(${props.imageUrl}) no-repeat center center`,
      }}
    >
      <div className="block__content">
        <h2 className="block__title">Quisigte ebet libero</h2>
        <p className="block__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ultricies sed odio id porttitor. Praesent auctor tristique justo quis
          pretium. Integer vel tincidunt neque, eu convallis metus. Sed
        </p>
        <SeeMoreButton />
      </div>
    </div>
  );
};

export default ContentBlock;

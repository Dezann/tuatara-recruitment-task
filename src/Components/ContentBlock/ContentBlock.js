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
        backgroundSize: "cover",
      }}
    >
      <div className="block__content">
        <h2 className="block__title">{props.title}</h2>
        <p className="block__body">{props.body}</p>
        <SeeMoreButton />
      </div>
    </div>
  );
};

export default ContentBlock;

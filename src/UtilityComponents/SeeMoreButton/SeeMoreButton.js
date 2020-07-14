import React from "react";
import { ReactComponent as ReactLogo } from "../../Assets/Images/arrow.svg";
import "./SeeMoreButton.scss";

const SeeMoreButton = () => {
  const buttonStyle = {
    color: "#002d5c",
    background: "none",
  };

  return (
    <button className="see-more-btn">
      <div>
        <div>
          SEE
          <br />
          MORE
        </div>
      </div>
    </button>
  );
};

export default SeeMoreButton;

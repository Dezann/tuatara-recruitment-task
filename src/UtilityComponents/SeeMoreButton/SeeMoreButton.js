import React from "react";
import "./SeeMoreButton.scss";
import { ReactComponent as Arrow } from "../../Assets/Images/arrow.svg";

const SeeMoreButton = () => {
  return (
    <button className="see-more-btn">
      SEE
      <br />
      MORE
      <Arrow />
    </button>
  );
};

export default SeeMoreButton;

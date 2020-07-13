import React from "react";
import "./FullHeightSection.scss";

const FullHeightSection = (props) => {
  return <section className="full-height-section">{props.children}</section>;
};

export default FullHeightSection;

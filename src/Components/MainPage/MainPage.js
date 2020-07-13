import React from "react";
import Hero from "../Hero/Hero";
import FullHeightSection from "../FullHeightSection/FullHeightSection";
import YoutubePlayerBlock from "../YoutubePlayerBlock/YoutubePlayerBlock";

const MainPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <FullHeightSection>
        <YoutubePlayerBlock />
      </FullHeightSection>
    </React.Fragment>
  );
};

export default MainPage;

import React from "react";
import Hero from "../Hero/Hero";
import FullHeightSection from "../FullHeightSection/FullHeightSection";
import YoutubePlayerBlock from "../YoutubePlayerBlock/YoutubePlayerBlock";
import ContentBlock from "../ContentBlock/ContentBlock";

const MainPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <FullHeightSection>
        <YoutubePlayerBlock />
      </FullHeightSection>
      <FullHeightSection>
        <ContentBlock />
        <ContentBlock />
      </FullHeightSection>
    </React.Fragment>
  );
};

export default MainPage;

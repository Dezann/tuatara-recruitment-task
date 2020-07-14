import React from "react";
import Hero from "../Hero/Hero";
import FullHeightSection from "../FullHeightSection/FullHeightSection";
import YoutubePlayerBlock from "../YoutubePlayerBlock/YoutubePlayerBlock";
import ContentBlock from "../ContentBlock/ContentBlock";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <FullHeightSection>
        <YoutubePlayerBlock />
      </FullHeightSection>
      <FullHeightSection>
        <ContentBlock imageUrl="https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80" />
        <ContentBlock imageUrl="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </FullHeightSection>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default MainPage;

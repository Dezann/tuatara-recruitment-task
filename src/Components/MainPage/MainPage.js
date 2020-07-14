import React from "react";
import Hero from "../Hero/Hero";
import FullHeightSection from "../FullHeightSection/FullHeightSection";
import YoutubePlayerBlock from "../YoutubePlayerBlock/YoutubePlayerBlock";
import ContentBlock from "../ContentBlock/ContentBlock";
import Footer from "../Footer/Footer";
import WordTabs from "../WordTabs/WordTabs";
import jobsImage from "../../Assets/Images/jobs.png";

const MainPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <FullHeightSection>
        <WordTabs />
        <YoutubePlayerBlock />
      </FullHeightSection>
      <FullHeightSection>
        <ContentBlock
          imageUrl={jobsImage}
          title="Test title"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ultricies sed odio id porttitor. Praesent auctor tristique justo quis
          pretium. Integer vel tincidunt neque, eu convallis metus. Sed"
        />
        <ContentBlock
          imageUrl={jobsImage}
          title="Lore ipsum"
          body="sent auctor tristiqu id porttitor. Praesent auctor tristique justo quis
          pretium. Integer vel tincidunt neque, eu convallis metus. See justo quis
          pretium. Integer vel tincidunt neque, eu convallis metus. Sed"
        />
      </FullHeightSection>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default MainPage;

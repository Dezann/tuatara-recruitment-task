import React from "react";
import "./App.scss";
import MainPage from "./Components/MainPage";
import FullHeightSection from "./Components/FullHeightSection/FullHeightSection";

function App() {
  return (
    <div className="App">
      <MainPage />
      <FullHeightSection></FullHeightSection>
    </div>
  );
}

export default App;

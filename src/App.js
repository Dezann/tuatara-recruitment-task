import React from "react";
import "./App.scss";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;

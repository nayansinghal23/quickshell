import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import StateContextProvider from "./context/StateContextProvider";

const App = () => {
  return (
    <StateContextProvider>
      <div>
        <Navbar />
        <MainContent />
      </div>
    </StateContextProvider>
  );
};

export default App;

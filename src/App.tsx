import React from "react";
import "./App.css";
// import CharCounter from "./CharCounter/CharCounter";
import TabbedInterface from "./TabbedInterface/TabbedInterface";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="blue-box"></div>
      <TabbedInterface />
    </div>
  );
};

export default App;

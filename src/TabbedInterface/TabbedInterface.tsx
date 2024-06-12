// TabbedInterface.tsx
import React, { useState } from "react";
import CharCounter from "./CharCounter/CharCounter";
import "./Tabs.css";
import Pokemon from "./Pokemon/Pokemon";

type TabName = "charCounter" | "pokemonByType";

const TabbedInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>("charCounter");

  const renderContent = () => {
    switch (activeTab) {
      case "charCounter":
        return <CharCounter />;
      case "pokemonByType":
        return <Pokemon />;
      default:
        return <CharCounter />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("charCounter")}>
          Char Counter
        </button>
        <button onClick={() => setActiveTab("pokemonByType")}>Pokémon</button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TabbedInterface;

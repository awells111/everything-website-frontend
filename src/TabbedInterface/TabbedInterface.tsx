import React, { useState } from "react";
import CharCounter from "./CharCounter/CharCounter";
import Pokemon from "./Pokemon/Pokemon";
import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import PokeTree from "./PokeTree/PokeTree";
import RustTabs from "./RustTabs/RustTabs";
import BEMHelper from "react-bem-helper";
import "./TabbedInterface.css";
import InputReactNumberFormat from "./Misc/InputReactNumberFormat";
import Misc from "./Misc/Misc";
var classes = new BEMHelper("tabbed-interface");


const TabbedInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Tabs
      value={activeTab}
      onChange={(event, value) => setActiveTab(value as number)}
      {...classes({
        modifiers: [activeTab === 1 ? "pokemon-active" : ""],
      })}
      sx={{ height: "100vh" }}
    >
      <TabList>
        <Tab>Char Counter</Tab>
        <Tab>Pokémon</Tab>
        <Tab>Rust</Tab>
        <Tab>PokeDemo</Tab>
        <Tab>Misc</Tab>
      </TabList>
      <TabPanel value={0}>
        <CharCounter />
      </TabPanel>
      <TabPanel value={1}>
        <Pokemon />
      </TabPanel>
      <TabPanel value={2}>
        <RustTabs />
      </TabPanel>
      <TabPanel value={3}>
        <PokeTree />
      </TabPanel>
      <TabPanel value={4}>
        <Misc />
        <InputReactNumberFormat />
      </TabPanel>
    </Tabs>
  );
};

export default TabbedInterface;

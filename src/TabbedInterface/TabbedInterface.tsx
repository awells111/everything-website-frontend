import React from "react";
import CharCounter from "./CharCounter/CharCounter";
import Pokemon from "./Pokemon/Pokemon";
import Rust from "./Rust/Rust";
import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";

const TabbedInterface: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Char Counter</Tab>
        <Tab>Pokémon</Tab>
        <Tab>Rust</Tab>
      </TabList>
      <TabPanel value={0}>
        <CharCounter />
      </TabPanel>
      <TabPanel value={1}>
        <Pokemon />
      </TabPanel>
      <TabPanel value={2}>
        <Rust />
      </TabPanel>
    </Tabs>
  );
};

export default TabbedInterface;

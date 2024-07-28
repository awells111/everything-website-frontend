import React from "react";
import CharCounter from "./CharCounter/CharCounter";
import Pokemon from "./Pokemon/Pokemon";
import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import PokeTree from "./PokeTree/PokeTree";
import RustTabs from "./RustTabs/RustTabs";

const TabbedInterface: React.FC = () => {
  return (
    <Tabs sx={{ height: "100vh" }}>
      <TabList>
        <Tab>Char Counter</Tab>
        <Tab>Pokémon</Tab>
        <Tab>Rust</Tab>
        <Tab>PokeDemo</Tab>
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
    </Tabs>
  );
};

export default TabbedInterface;

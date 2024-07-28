import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import Smelter from "./Smelter/Smelter";
import TCUpkeep from "./TCUpkeep/TCUpkeep";

type Props = {};

function RustTabs({}: Props) {
  return (
    <Tabs sx={{ height: "100%" }}>
      <TabList>
        <Tab>Smelter</Tab>
        <Tab>TC Upkeep</Tab>
      </TabList>
      <TabPanel value={0}>
        <Smelter />
      </TabPanel>
      <TabPanel value={1}>
        <TCUpkeep />
      </TabPanel>
    </Tabs>
  );
}

export default RustTabs;

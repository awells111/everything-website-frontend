import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import Smelter from "./Smelter/Smelter";
import TCUpkeep from "./TCUpkeep/TCUpkeep";
import ResourceCalculator from "./ResourceCalculator/ResourceCalculator";

function RustTabs() {
  return (
    <Tabs sx={{ height: "100%" }}>
      <TabList>
        <Tab>Smelter</Tab>
        <Tab>TC Upkeep</Tab>
        <Tab>Resource Calculator</Tab>
      </TabList>
      <TabPanel value={0}>
        <Smelter />
      </TabPanel>
      <TabPanel value={1}>
        <TCUpkeep />
      </TabPanel>
      <TabPanel value={2}>
        <ResourceCalculator />
      </TabPanel>
    </Tabs>
  );
}

export default RustTabs;

import React from "react";
import { Grid, Input, Typography } from "@mui/joy";

// It takes this amount of wood to smelt 1 metal
const METAL_WOOD_COUNT = 1.67;
// It takes this amount of seconds to smelt 1 metal
const METAL_SMELT_SECONDS = 3.33;

// It takes this amount of wood to smelt 1 sulfur
const SULFUR_WOOD_COUNT = 0.83;
// It takes this amount of time to smelt 1 sulfur
const SULFUR_SMELT_SECONDS = 1.67;

function Smelter() {
  const [metalOreCount, setMetalOreCount] = React.useState<number | undefined>(
    undefined
  );
  const [sulfurOreCount, setSulfurOreCount] = React.useState<
    number | undefined
  >(undefined);

  const metalRequiredWood =
    metalOreCount && Math.ceil(metalOreCount * METAL_WOOD_COUNT);
  const metalSmeltingTime =
    metalOreCount && Math.ceil(metalOreCount * METAL_SMELT_SECONDS);

  const metalSmeltingLabel: string = React.useMemo(() => {
    if (!metalOreCount || !metalSmeltingTime) {
      return "";
    }
    const minutes = Math.floor(metalSmeltingTime / 60);
    const remainingSeconds = metalSmeltingTime % 60;
    return `Smelting time: ${minutes} minutes and ${remainingSeconds} seconds`;
  }, [metalOreCount, metalSmeltingTime]);

  const sulfurRequiredWood =
    sulfurOreCount && Math.ceil(sulfurOreCount * SULFUR_WOOD_COUNT);
  const sulfurSmeltingTime =
    sulfurOreCount && Math.ceil(sulfurOreCount * SULFUR_SMELT_SECONDS);

  const sulfurSmeltingLabel: string = React.useMemo(() => {
    if (!sulfurOreCount || !sulfurSmeltingTime) {
      return "";
    }
    const minutes = Math.floor(sulfurSmeltingTime / 60);
    const remainingSeconds = sulfurSmeltingTime % 60;
    return `Smelting time: ${minutes} minutes and ${remainingSeconds} seconds`;
  }, [sulfurOreCount, sulfurSmeltingTime]);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
      <Grid xs={12}>
        <Typography level="h2">Smelter</Typography>
      </Grid>
      <Grid xs={3}>
        <Input
          value={metalOreCount}
          onChange={(event) => {
            const newValue = Number(event.target.value);
            if (isNaN(newValue) || newValue < 0) {
              return;
            }
            if (newValue < 0) {
              return;
            }
            // Don't allow decimals
            if (newValue % 1 !== 0) {
              setMetalOreCount(Math.floor(newValue));
              return;
            }

            setMetalOreCount(newValue);
          }}
          placeholder="Metal ore count"
          type="number"
        />
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">You have {metalOreCount} ore</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">
          You need {metalRequiredWood} wood
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">{metalSmeltingLabel}</Typography>
      </Grid>

      <Grid xs={3}>
        <Input
          value={sulfurOreCount}
          onChange={(event) => {
            const newValue = Number(event.target.value);
            if (isNaN(newValue) || newValue < 0) {
              return;
            }
            if (newValue < 0) {
              return;
            }
            // Don't allow decimals
            if (newValue % 1 !== 0) {
              setSulfurOreCount(Math.floor(newValue));
              return;
            }

            setSulfurOreCount(newValue);
          }}
          placeholder="Sulfur ore count"
          type="number"
        />
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">You have {sulfurOreCount} ore</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">
          You need {sulfurRequiredWood} wood
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">{sulfurSmeltingLabel}</Typography>
      </Grid>
    </Grid>
  );
}

export default Smelter;
import React from "react";
import { Grid, Input, Typography } from "@mui/joy";

function Smelter() {
  const [oreCount, setOreCount] = React.useState<number | undefined>(undefined);

  const requiredWood = oreCount && Math.ceil(oreCount * 1.67);
  const smeltingTime = oreCount && Math.ceil(oreCount * 3.33);

  const smeltingLabel: string = React.useMemo(() => {
    if (!oreCount || !smeltingTime) {
      return "";
    }
    const minutes = Math.floor(smeltingTime / 60);
    const remainingSeconds = smeltingTime % 60;
    return `Smelting time: ${minutes} minutes and ${remainingSeconds} seconds`;
  }, [oreCount, smeltingTime]);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
      <Grid xs={12}>
        <Typography level="h2">Smelter</Typography>
      </Grid>
      <Grid xs={3}>
        <Input
          value={oreCount}
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
              setOreCount(Math.floor(newValue));
              return;
            }

            setOreCount(newValue);
          }}
          placeholder="Ore count"
          type="number"
        />
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">You have {oreCount} ore</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">You need {requiredWood} wood</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography level="body-lg">{smeltingLabel}</Typography>
      </Grid>
    </Grid>
  );
}

export default Smelter;

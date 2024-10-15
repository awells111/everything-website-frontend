import React from "react";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import { Grid } from "@mui/joy";

function Misc() {
  const [gb, setGB] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const new Value = Number(event.target.value);

//   }
  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid>
          <Input
            placeholder="Type GB Here"
            onChange={(e) => setGB(Number(e.target.value))}
            type="number"
            // min="0"
            // max="16"
          />
        </Grid>
        <Grid> = </Grid>
        <Grid>{1024 * gb} M</Grid>
      </Grid>
    </div>
  );
}

export default Misc;

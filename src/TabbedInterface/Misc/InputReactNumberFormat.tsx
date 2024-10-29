import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import Input from "@mui/joy/Input";
import { Grid } from "@mui/joy";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatAdapter = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatAdapter(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        allowNegative={false}
        // suffix="GB"
        
      />
    );
  }
);

export default function InputReactNumberFormat() {
  const [value, setValue] = React.useState("0");
  return (
    // <FormControl>
    //   <FormLabel>React number format</FormLabel>
      <div>
        {/* <span> */}
        <Grid sx={{ flexGrow: 1 }}>
          <Grid>
        <Input
          sx={{ width: "200px" }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Type GB Here"
          type="number"
          slotProps={{
            input: {
              component: NumericFormatAdapter,
            },
          }}
        />
        GB
        </Grid>
        <Grid>
        {/* </span> */}
        ={parseInt(value) * 1024} M
        </Grid>
        </Grid>
      </div>
    // </FormControl>
  );
}

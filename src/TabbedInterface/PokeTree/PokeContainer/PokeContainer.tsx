import { Button } from "@mui/joy";
import React from "react";

type Props = {
  children?: React.ReactNode;
  backgroundColor: string;
  pokemonName: string;
};

function PokeContainer({ children, backgroundColor, pokemonName }: Props) {
  return (
    <div
      style={{
        // backgroundColor: backgroundColor,
        minHeight: "100px",
        minWidth: "100px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Button>{pokemonName}</Button>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
}

export default PokeContainer;

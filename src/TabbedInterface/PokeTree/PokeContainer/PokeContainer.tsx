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
        display: "flex",
        alignItems: "center",
      }}
    >
      <span>
        <Button>{pokemonName}</Button>
      </span>
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

export default PokeContainer;

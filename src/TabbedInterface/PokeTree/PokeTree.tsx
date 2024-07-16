import { Typography } from "@mui/joy";
import React from "react";
import DemoData from "./DemoData";
import PokeContainer from "./PokeContainer/PokeContainer";

function PokeTree() {
  const tree = DemoData();
  const chain = tree.chain;
  const rowOne = [chain];
  const rowTwo = [];
  const rowThree = [];

  // Props passed in from parent
  // const [activePokemon, setActivePokemon] = React.useState<string>("");

  for (let i = 0; i < rowOne.length; i++) {
    const previousPokemon = rowOne[i];
    const evolutions = previousPokemon.evolves_to;
    for (let j = 0; j < evolutions.length; j++) {
      rowTwo.push(evolutions[j]);
    }
  }

  for (let i = 0; i < rowTwo.length; i++) {
    const previousPokemon = rowTwo[i];
    const evolutions = previousPokemon.evolves_to;
    for (let j = 0; j < evolutions.length; j++) {
      rowThree.push(evolutions[j]);
    }
  }

  console.log(1);
  console.log(rowOne);
  console.log(2);
  console.log(rowTwo);
  console.log(3);
  console.log(rowThree);

  // for (let i = 0; i < rowTwo.length; i++) {
  //   const previousPokemon = rowTwo[i]
  //   rowThree.push(previousPokemon.evolves_to);
  // }

  return (
    <div>
      <Typography level="h2">PokeDemo</Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PokeContainer backgroundColor="red" pokemonName="Bulbasaur">
          <PokeContainer backgroundColor="blue" pokemonName="Ivysaur">
            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />

            <PokeContainer
              backgroundColor="green"
              pokemonName="Venusaur"
              children={undefined}
            />
          </PokeContainer>

          <PokeContainer backgroundColor="blue" pokemonName="Ivysaur">
            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />

            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />
            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />
            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />
            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />
            <PokeContainer backgroundColor="green" pokemonName="Venusaur" />
          </PokeContainer>
        </PokeContainer>
      </div>

      {/* Add some space */}
      <div style={{ minHeight: "100px", minWidth: "100px", padding: "10px" }} />

      {/* 3 Rows */}
      {/* <PokeContainer backgroundColor="red">
        <Button>Bulbasaur</Button>
      </PokeContainer>

      <PokeContainer backgroundColor="blue">
        <Button>Ivysaur</Button>
      </PokeContainer>

      <PokeContainer backgroundColor="green">
        <Button>Venusaur</Button>
      </PokeContainer> */}
    </div>
  );
}

export default PokeTree;

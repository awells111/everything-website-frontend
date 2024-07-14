import { Button, Typography } from "@mui/joy";
import React from "react";
import DemoData from "./DemoData";
import "./PokeTreeStyles.css";

function PokeTree() {
  const tree = DemoData();
  const chain = tree.chain;
  const rowOne = [chain];
  const rowTwo = [];
  const rowThree = [];

  // Props passed in from parent
  const [activePokemon, setActivePokemon] = React.useState<string>("");

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

  
  // console.log(1);
  // console.log(rowOne);
  // console.log(2)
  // console.log(rowTwo)
  // console.log(3);
  // console.log(rowThree);
  console.log(activePokemon);
  // for (let i = 0; i < rowTwo.length; i++) {
  //   const previousPokemon = rowTwo[i]
  //   rowThree.push(previousPokemon.evolves_to);
  // }
  

  return (
    <div>
      <Typography level="h2">PokeDemo</Typography>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {rowOne.map((pokemon, index) => (
            <div key={index} className="button-container">
              {index === 0 && (
                <>
                  <Button
                    onClick={() => setActivePokemon(pokemon.species.name)}
                  >
                    {pokemon.species.name}
                  </Button>
                  <div className="arrow">▼</div>
                </>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {rowTwo.map((pokemon, index) => (
            <div key={index} className="button-container">
              {index < 2 && (
                <>
                  <Button
                    onClick={() => setActivePokemon(pokemon.species.name)}
                  >
                    {pokemon.species.name}
                  </Button>
                  <div className="arrow">▼</div>
                </>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {rowThree.map((pokemon, index) => (
            <div key={index} className="button-container">
              {index < 2 && (
                <>
                  <Button
                    onClick={() => setActivePokemon(pokemon.species.name)}
                  >
                    {pokemon.species.name}
                  </Button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default PokeTree;

import React from "react";
import "./Pokemon.css";
import PokemonByType from "./PokemonByType/PokemonByType";
import PokemonByName from "./PokemonByName/PokemonByName";

export type PokemonDetailsType = {
  name: string;
  sprite: string;
  types: string;
  height: string;
  weight: string;
  abilities: string;
};

const Pokemon: React.FC = () => {
  return (
    <div>
      <PokemonByType />
      <PokemonByName />
    </div>
  );
};

export default Pokemon;

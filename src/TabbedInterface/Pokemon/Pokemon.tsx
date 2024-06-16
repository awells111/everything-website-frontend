import React from "react";
import "./Pokemon.css";
import PokemonByType from "./PokemonByType/PokemonByType";

const Pokemon: React.FC = () => {
  return (
    <div>
      <PokemonByType />
    </div>
  );
};

export default Pokemon;

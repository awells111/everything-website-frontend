import React, { useState } from "react";
import "./Pokemon.css";
import PokemonByType from "./PokemonByType/PokemonByType";

export type PokemonListItemType = {
  name: string;
  url: string;
};

export type PokemonDetailsType = {
  name: string;
  sprite: string;
};

const Pokemon: React.FC = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsType[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <PokemonByType
        setPokemonDetails={setPokemonDetails}
        setError={setError}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Pokemon List */}
      {pokemonDetails.length > 0 && (
        <div>
          <p>
            <strong>Total Pokémon:</strong> {pokemonDetails.length}
          </p>
          <div className="pokemon-list">
            {pokemonDetails.map((pokemon, index) => (
              <div key={index} className="pokemon-item">
                <img src={pokemon.sprite} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;

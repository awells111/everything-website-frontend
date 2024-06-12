import React, { useState } from "react";
import "./Pokemon.css";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonDetails = {
  name: string;
  sprite: string;
};

const PokemonByType: React.FC = () => {
  const [type, setType] = useState<string>("");
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonByType = async (type: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Type not found");
      }
      const data = await response.json();
      const pokemonList = data.pokemon.map(
        (p: { pokemon: Pokemon }) => p.pokemon
      );

      const detailsPromises = pokemonList.map(async (pokemon: Pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
          name: data.name,
          sprite: data.sprites.front_default,
        };
      });

      const details = await Promise.all(detailsPromises);
      setPokemonDetails(details);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setPokemonDetails([]);
    }
  };

  const handleFetch = () => {
    fetchPokemonByType(type);
  };

  return (
    <div>
      <h2>Pokémon by Type</h2>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Enter Pokémon type"
      />
      <button onClick={handleFetch}>Fetch Pokémon</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
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

export default PokemonByType;

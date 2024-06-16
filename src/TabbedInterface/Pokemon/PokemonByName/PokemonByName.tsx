import React, { useState } from "react";

export type PokemonDetailsType = {
  name: string;
  sprite: string;
  types: string;
  height: string;
  weight: string;
  abilities: string;
};

const capitalize = (str: string) =>
  str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("-");

const PokemonSearch: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonDetailsType | null>(null);

  const fetchPokemonDetails = async (name: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      const data = await response.json();
      const details: PokemonDetailsType = {
        name: capitalize(data.name),
        sprite: data.sprites.front_default,
        types: data.types.map((type: { type: { name: string } }) =>
          capitalize(type.type.name)
        ),
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map(
          (ability: { ability: { name: string } }) =>
            capitalize(ability.ability.name)
        ),
      };
      setPokemonDetails(details);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setPokemonDetails(null);
    }
  };

  const handleSearch = () => {
    if (pokemonName) {
      fetchPokemonDetails(pokemonName);
    } else {
      setError("Please enter a Pokémon name");
    }
  };

  return (
    <div>
      <h2>Search Pokémon</h2>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleSearch}>Search</button>
      {pokemonDetails && (
        <div>
          <h3>{pokemonDetails.name}</h3>
          <img src={pokemonDetails.sprite} alt={pokemonDetails.name} />
          <p>Types: {pokemonDetails.types}</p>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Abilities: {pokemonDetails.abilities}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;

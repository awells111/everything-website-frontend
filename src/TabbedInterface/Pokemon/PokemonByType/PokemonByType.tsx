import React, { useState } from "react";
import { PokemonDetailsType, PokemonListItemType } from "../Pokemon";
import getPokemonTypes from "./getPokemonTypes";

type Props = {
  setPokemonDetails: (pokemonDetails: PokemonDetailsType[]) => void;
  setError: (error: string | null) => void;
};

function PokemonByType({ setPokemonDetails, setError }: Props) {
  //const [type, setType] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  //todo feed this to a dropdown
  const pokemonTypes = getPokemonTypes();

  // in the dropdown you would do something like pok

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
        (p: { pokemon: PokemonListItemType }) => p.pokemon
      );

      const detailsPromises = pokemonList.map(
        async (pokemon: PokemonListItemType) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return {
            name: data.name,
            sprite: data.sprites.front_default,
          };
        }
      );

      const details = await Promise.all(detailsPromises);
      setPokemonDetails(details);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setPokemonDetails([]);
    }
  };

  const handleFetch = () => {
    if (selectedType) {
      fetchPokemonByType(selectedType);
    } else {
      setError("Please select a type");
    }
  };
  return (
    <div>
      <h2>Pokémon by Type</h2>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">Select a type</option>
        {pokemonTypes.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <button onClick={handleFetch}>Fetch Pokémon</button>
    </div>
  );
}

export default PokemonByType;

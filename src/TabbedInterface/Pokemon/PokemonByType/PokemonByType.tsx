import React, { useState } from "react";
import { PokemonDetailsType, PokemonListItemType } from "../Pokemon";
import getPokemonTypes from "./getPokemonTypes";

type Props = {
  setPokemonDetails: (pokemonDetails: PokemonDetailsType[]) => void;
  setError: (error: string | null) => void;
};

function PokemonByType({ setPokemonDetails, setError }: Props) {
  const pokemonTypes = getPokemonTypes();

  const capitalize = (pokemonName: string) => {
    const stringParts: string[] = pokemonName.split("-");

    for (let index = 0; index < stringParts.length; index++) {
      const stringPart = stringParts[index];
      if (stringPart === "gmax" || stringParts[index] === "mega") {
        stringParts[index] = stringPart.toUpperCase();
        // Continue to the next iteration of the loop
        continue;
      }
      stringParts[index] =
        stringPart.charAt(0).toUpperCase() + stringPart.slice(1).toLowerCase();
    }
    const capitalizedName = stringParts.join("-");

    return capitalizedName;
  };

  const [selectedType, setSelectedType] = useState<string>("");

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
            name: capitalize(data.name),
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
            {type.display}
          </option>
        ))}
      </select>
      <button onClick={handleFetch}>Fetch Pokémon</button>
    </div>
  );
}

export default PokemonByType;

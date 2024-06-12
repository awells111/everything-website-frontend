import React, { useState } from "react";
import { PokemonDetailsType, PokemonListItemType } from "../Pokemon";

type Props = {
  setPokemonDetails: (pokemonDetails: PokemonDetailsType[]) => void;
  setError: (error: string | null) => void;
};

function PokemonByName({setPokemonDetails, setError}: Props) {
    const [type, setType] = useState<string>("");

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
      fetchPokemonByType(type);
    };
    return (
      <div>
        <h2>Pokémon Counters</h2>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter Pokémon Name"
        />
        <button onClick={handleFetch}>Fetch Pokémon</button>
      </div>
    );
  }

export default PokemonByName
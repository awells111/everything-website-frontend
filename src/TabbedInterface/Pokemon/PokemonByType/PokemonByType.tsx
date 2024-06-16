import React, { useMemo, useState } from "react";
import getPokemonTypes from "./getPokemonTypes";
import { TypedDocumentNode, gql, useLazyQuery } from "@apollo/client";
import { GetPokemonByTypeQuery, Pokemon } from "../../../__generated__/graphql";

export const POKEMON_BY_TYPE: TypedDocumentNode<GetPokemonByTypeQuery> = gql`
  query GetPokemonByType($pokemonType: String!) {
    pokemonByType(pokemonType: $pokemonType) {
      id
      name
      sprites {
        frontDefault
      }
    }
  }
`;

function PokemonByType() {
  const [selectedType, setSelectedType] = useState<string>("");

  const [getPokemonByType, { loading, error, data }] = useLazyQuery(
    POKEMON_BY_TYPE,
    {
      variables: { pokemonType: selectedType.toLowerCase() },
    }
  );

  type PartialPokemon = Omit<
    Pokemon,
    "abilities" | "height" | "types" | "weight"
  >;
  const pokemon: PartialPokemon[] = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.pokemonByType;
  }, [data]);

  const pokemonTypes = getPokemonTypes();

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
      <button onClick={() => getPokemonByType()}>Fetch Pokémon</button>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {/* Pokemon List */}
      {data && data.pokemonByType.length > 0 && (
        <div>
          <p>
            <strong>Total Pokémon:</strong> {pokemon.length}
          </p>
          <div className="pokemon-list">
            {pokemon.map((item, index) => (
              <div key={index} className="pokemon-item">
                <img src={item.sprites.frontDefault || ""} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonByType;

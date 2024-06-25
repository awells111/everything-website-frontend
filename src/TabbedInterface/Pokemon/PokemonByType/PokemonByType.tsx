import React, { useMemo, useState } from "react";
import getPokemonTypes from "./getPokemonTypes";
import { TypedDocumentNode, gql, useLazyQuery } from "@apollo/client";
import { GetPokemonByTypeQuery, Pokemon } from "../../../__generated__/graphql";
import PokemonMenu from "./PokemonMenu/PokemonMenu";
import { CircularProgress, Grid } from "@mui/joy";

export const POKEMON_BY_TYPE: TypedDocumentNode<GetPokemonByTypeQuery> = gql`
  query GetPokemonByType($pokemonType: String!) {
    pokemonByType(pokemonType: $pokemonType) {
      id
      name
      displayName
      sprites {
        frontDefault
      }
      height
      weight
      abilities {
        id
        name
        displayName
      }
      moves {
        id
        name
        displayName
        accuracy
      }
    }
  }
`;

function PokemonByType() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [activePokemon, setActivePokemon] = useState<Pokemon | null>(null);

  const [getPokemonByType, { loading, error, data }] = useLazyQuery(
    POKEMON_BY_TYPE,
    {
      variables: { pokemonType: selectedType },
    }
  );

  const pokemon: Pokemon[] = useMemo(() => {
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
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={4}>
          <div>
            {loading ? (
              <CircularProgress />
            ) : (
              <PokemonMenu
                data={data}
                pokemon={pokemon}
                setActivePokemon={setActivePokemon}
              />
            )}
          </div>
        </Grid>
        <Grid xs={8}>
          {activePokemon && (
            <div>
              <h3>{activePokemon.displayName}</h3>
              <img
                src={activePokemon.sprites.frontDefault || ""}
                alt={activePokemon.name}
              />
              <p>Height: {activePokemon.height}</p>
              <p>Weight: {activePokemon.weight}</p>
              {/* <p>Types: {activePokemon.types}</p> */}
              <p>Abilities: {activePokemon.abilities.map((ability) => ability.displayName).join(", ")}</p>
              <p>Moves: {activePokemon.moves.map((move) => move.displayName).join(", ")}</p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default PokemonByType;

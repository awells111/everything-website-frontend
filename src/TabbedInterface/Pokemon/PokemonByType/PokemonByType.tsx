import React, { useMemo, useState } from "react";
import getPokemonTypes from "./getPokemonTypes";
import { TypedDocumentNode, gql, useLazyQuery } from "@apollo/client";
import { GetPokemonByTypeQuery, Pokemon } from "../../../__generated__/graphql";
import PokemonMenu from "./PokemonMenu/PokemonMenu";
import { Grid, IconButton, Option, Select, SelectStaticProps } from "@mui/joy";
import Button from "@mui/joy/Button";
import CloseRounded from "@mui/icons-material/CloseRounded";

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
  const action: SelectStaticProps["action"] = React.useRef(null);

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
  function onSelectPokemon(value: string | null) {
    if (!value) return;
    setSelectedType(value);
  }

  return (
    <div>
      <h2>Pokémon by Type</h2>
      <Select
        placeholder="Select a Pokemon Type"
        value={selectedType}
        onChange={(e, value) => onSelectPokemon(value)}
        {...(selectedType && {
          // display the button and remove select indicator
          // when user has selected a value
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                // don't open the popup when clicking on this button
                event.stopPropagation();
              }}
              onClick={() => {
                setSelectedType("");
                action.current?.focusVisible();
              }}
            >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
        })}
        sx={{ minWidth: 160 }}
      >
        {pokemonTypes.map((type) => (
          <Option key={type.name} value={type.name}>
            {type.display}
          </Option>
        ))}
      </Select>
      <Button loading={loading} onClick={() => getPokemonByType()}>
        Fetch Pokémon
      </Button>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={4} style={{ maxHeight: "70vh", overflow: "auto" }}>
          <div>
            <PokemonMenu
              data={data}
              pokemon={pokemon}
              setActivePokemon={setActivePokemon}
            />
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
              <p>
                Abilities:{" "}
                {activePokemon.abilities
                  .map((ability) => ability.displayName)
                  .join(", ")}
              </p>
              <p>
                Moves:{" "}
                {activePokemon.moves.map((move) => move.displayName).join(", ")}
              </p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default PokemonByType;

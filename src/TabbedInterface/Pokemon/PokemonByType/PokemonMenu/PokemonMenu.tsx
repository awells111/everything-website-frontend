import React from "react";
import { GetPokemonByTypeQuery, Pokemon } from "../../../../__generated__/graphql";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";

type Props = {
  data: GetPokemonByTypeQuery | undefined;
  pokemon: Pokemon[]
  setActivePokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>
};

function PokemonMenu({ data, pokemon, setActivePokemon }: Props) {
  return (
    <div>
      {data && data.pokemonByType.length > 0 && (
        <div>
          <p>
            <strong>Total Pokémon:</strong> {pokemon.length}
          </p>
          <List>
            {pokemon.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={() => setActivePokemon(item)}>
                  <ListItemDecorator>
                    <img
                      src={item.sprites.frontDefault || ""}
                      alt={item.name}
                    />
                  </ListItemDecorator>
                  <ListItemContent>{item.displayName}</ListItemContent>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </div>
  );
}

export default PokemonMenu;

type PokemonDropDownType = {
  name: string;
  url: string;
  display: string;
};

const getPokemonTypes: () => PokemonDropDownType[] = () => {
  const types: PokemonDropDownType[] = [
    { name: "bug", url: "https://pokeapi.co/api/v2/type/7/", display: "Bug" },
    { name: "dark", url: "https://pokeapi.co/api/v2/type/17/", display: "Dark" },
    { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/", display: "Dragon" },
    { name: "electric", url: "https://pokeapi.co/api/v2/type/13/", display: "Electric" },
    { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/", display: "Fairy" },
    { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/", display: "Fighting" },
    { name: "fire", url: "https://pokeapi.co/api/v2/type/10/", display: "Fire" },
    { name: "flying", url: "https://pokeapi.co/api/v2/type/3/", display: "Flying"},
    { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/", display: "Ghost" },
    { name: "grass", url: "https://pokeapi.co/api/v2/type/12/", display: "Grass" },
    { name: "ground", url: "https://pokeapi.co/api/v2/type/5/", display: "Ground"  },
    { name: "ice", url: "https://pokeapi.co/api/v2/type/15/", display: "Ice" },
    { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" , display: "Normal" },
    { name: "poison", url: "https://pokeapi.co/api/v2/type/4/", display: "Poison" },
    { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/", display: "Psychic" },
    { name: "rock", url: "https://pokeapi.co/api/v2/type/6/", display: "Rock" },
    { name: "shadow", url: "https://pokeapi.co/api/v2/type/10002/" , display: "Shadow" },
    { name: "steel", url: "https://pokeapi.co/api/v2/type/9/", display: "Steel" },
    { name: "water", url: "https://pokeapi.co/api/v2/type/11/", display: "Water" },
    //{ name: "unknown", url: "https://pokeapi.co/api/v2/type/10001/" },
  ];
  return types;
};

export default getPokemonTypes;

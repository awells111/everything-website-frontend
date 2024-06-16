/**
 * Capitalizes each word in the input string separated by "-"
 *
 * @param {string} pokemonName - The name of the Pokemon to capitalize
 * @return {string} The capitalized Pokemon name
 */
export const capitalize = (pokemonName: string) => {
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
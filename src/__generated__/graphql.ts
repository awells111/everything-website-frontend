/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Pokemon = {
  __typename?: 'Pokemon';
  /** A list of abilities this Pokémon could potentially have. */
  abilities: Array<PokemonAbility>;
  /** The human readable name for this Pokemon. */
  displayName: Scalars['String']['output'];
  /** The height of this Pokémon in decimetres. */
  height?: Maybe<Scalars['String']['output']>;
  /** The identifier for this Pokemon. */
  id: Scalars['ID']['output'];
  /** The name for this Pokemon. */
  name: Scalars['String']['output'];
  /** The URL of the Pokemon image */
  sprites: PokemonSprites;
  /** A list of details showing types this Pokémon has. */
  types?: Maybe<Array<PokemonType>>;
  /** The weight of this Pokemon in hectograms. */
  weight?: Maybe<Scalars['String']['output']>;
};

export type PokemonAbility = {
  __typename?: 'PokemonAbility';
  /** The display name for this ability. */
  displayName: Scalars['String']['output'];
  /** The identifier for this ability. */
  id: Scalars['ID']['output'];
  /** The name for this ability. */
  name: Scalars['String']['output'];
};

export type PokemonSprites = {
  __typename?: 'PokemonSprites';
  /** The default depiction of this Pokémon from the back in battle. */
  backDefault?: Maybe<Scalars['String']['output']>;
  /** The female depiction of this Pokémon from the back in battle. */
  backFemale?: Maybe<Scalars['String']['output']>;
  /** The shiny depiction of this Pokémon from the back in battle. */
  backShiny?: Maybe<Scalars['String']['output']>;
  /** The shiny female depiction of this Pokémon from the back in battle. */
  backShinyFemale?: Maybe<Scalars['String']['output']>;
  /** The default depiction of this Pokémon from the front in battle. */
  frontDefault?: Maybe<Scalars['String']['output']>;
  /** The female depiction of this Pokémon from the front in battle. */
  frontFemale?: Maybe<Scalars['String']['output']>;
  /** The shiny depiction of this Pokémon from the front in battle. */
  frontShiny?: Maybe<Scalars['String']['output']>;
  /** The shiny female depiction of this Pokémon from the front in battle. */
  frontShinyFemale?: Maybe<Scalars['String']['output']>;
};

export type PokemonType = {
  __typename?: 'PokemonType';
  /** The identifier for the pokemon's type. */
  id: Scalars['ID']['output'];
  /** The name for the pokemon's type. */
  name: Scalars['String']['output'];
  /** The pokemon of this type. */
  pokemon: Array<Pokemon>;
};

export type Query = {
  __typename?: 'Query';
  /** Query to get pokemon by a pokemon type */
  pokemonByType: Array<Pokemon>;
};


export type QueryPokemonByTypeArgs = {
  pokemonType: Scalars['String']['input'];
};

export type GetPokemonByTypeQueryVariables = Exact<{
  pokemonType: Scalars['String']['input'];
}>;


export type GetPokemonByTypeQuery = { __typename?: 'Query', pokemonByType: Array<{ __typename?: 'Pokemon', id: string, name: string, displayName: string, height?: string | null, weight?: string | null, sprites: { __typename?: 'PokemonSprites', frontDefault?: string | null }, abilities: Array<{ __typename?: 'PokemonAbility', id: string, name: string, displayName: string }> }> };


export const GetPokemonByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemonByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pokemonType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemonByType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pokemonType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pokemonType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"sprites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"frontDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"abilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}}]} as unknown as DocumentNode<GetPokemonByTypeQuery, GetPokemonByTypeQueryVariables>;
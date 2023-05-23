import { Pokemon } from '../models/Pokemon';
import { POKEMON_TYPES } from './pokemonTypes';
import { ROUTES } from './routes';

export const POKEMONS: Pokemon[] = [
  new Pokemon('malvalame', 167, `${ROUTES.pokemonsFolder}malvalame.png`, [
    POKEMON_TYPES[6],
    POKEMON_TYPES[15],
  ]),
  new Pokemon('arboliva', 86, `${ROUTES.pokemonsFolder}arboliva.png`, [
    POKEMON_TYPES[9],
    POKEMON_TYPES[10],
  ]),
  new Pokemon('raichu', 75, `${ROUTES.pokemonsFolder}raichu.png`, [
    POKEMON_TYPES[4],
  ]),
  new Pokemon('leviator', 135, `${ROUTES.pokemonsFolder}leviator.png`, [
    POKEMON_TYPES[3],
    POKEMON_TYPES[17],
  ]),
];

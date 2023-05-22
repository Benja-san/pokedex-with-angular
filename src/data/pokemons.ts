import { Pokemon } from '../models/Pokemon';
import { PokemonType } from '../models/PokemonType';
import { ROUTES } from './routes';

export const POKEMONS: Pokemon[] = [
  new Pokemon('malvalame', 167, `${ROUTES.pokemonsFolder}malvalame.png`, [
    new PokemonType('feu'),
    new PokemonType('spectre'),
  ]),
  new Pokemon('arboliva', 86, `${ROUTES.pokemonsFolder}arboliva.png`, [
    new PokemonType('plante'),
    new PokemonType('normal'),
  ]),
  new Pokemon('raichu', 75, `${ROUTES.pokemonsFolder}raichu.png`, [
    new PokemonType('electrik'),
  ]),
  new Pokemon('leviator', 135, `${ROUTES.pokemonsFolder}leviator.png`, [
    new PokemonType('eau'),
    new PokemonType('vol'),
  ]),
];

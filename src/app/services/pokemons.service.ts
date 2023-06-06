import { Injectable } from '@angular/core';
import { POKEMONS } from 'src/data/pokemons';
import { Pokemon } from 'src/models/Pokemon';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  public pokemons: Pokemon[] = POKEMONS;
  public filteredPokemons: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  public getPokemonById(id: number): Pokemon {
    const pokemon = this.pokemons[id - 1];
    if (!pokemon) {
      this.router.navigate(['/404']);
      throw new Error('Pokemon not found');
    }
    return pokemon;
  }

  public filterPokemonsByResearch(searchInput: string): Pokemon[] {
    if (!searchInput.trim()) {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => {
        return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
    console.log('yeah');
    console.log(searchInput);
    console.log(this.filteredPokemons);
    return this.filteredPokemons;
  }
}

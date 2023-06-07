import { Injectable } from '@angular/core';
import { POKEMONS } from 'src/data/pokemons';
import { Pokemon } from 'src/models/Pokemon';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  public pokemons: Pokemon[] = POKEMONS;
  public filteredPokemons: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  public getPokemonBySlug(slug: string): Pokemon {
    const pokemon = this.pokemons.find((pokemon: Pokemon) => {
      return pokemon.slug === slug;
    });
    if (!pokemon) {
      this.router.navigate(['/404']);
      throw new Error('Pokemon not found');
    }
    return pokemon;
  }

  // public filterPokemonsByResearch(searchInput: string): Pokemon[] {
  //   if (!searchInput.trim()) {
  //     this.filteredPokemons = this.pokemons;
  //   } else {
  //     this.filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => {
  //       return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
  //     });
  //   }
  //   return this.filteredPokemons;
  // }
  public filterPokemonsByResearch(searchInput: string): Observable<Pokemon[]> {
    if (!searchInput.trim()) {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => {
        return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
    return new Observable<Pokemon[]>((observer) => {
      observer.next(this.filteredPokemons);
    });
  }
}

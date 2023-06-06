import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Pokemon } from '../../models/Pokemon';
import { ROUTES } from 'src/data/routes';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  private _pictureRoute: string = ROUTES.pokemonTypesFolder;
  public pokemons: Pokemon[] = [];

  constructor(
    private metaService: Meta,
    private pokemonsService: PokemonsService,
    private searchService: SearchService
  ) {
    this.addTag();
  }
  ngOnInit(): void {
    this.pokemons = this.pokemonsService.pokemons;
    this.searchService.searchIput$.subscribe((searchInput: string) => {
      this.pokemons =
        this.pokemonsService.filterPokemonsByResearch(searchInput);
    });
  }

  public get pictureRoute(): string {
    return this._pictureRoute;
  }

  addTag() {
    this.metaService.addTag({
      name: 'description',
      content:
        'feel free to browse, filter and find the pokemon you want to retrieve, from first to last Gen!',
    });
    this.metaService.addTag({
      property: 'og:title',
      content: 'PokedexApp : Pokedex',
    });
  }
}

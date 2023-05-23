import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Pokemon } from '../../models/Pokemon';
import { POKEMONS } from 'src/data/pokemons';
import { ROUTES } from 'src/data/routes';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pictureRoute: string;
  pokemons: Pokemon[];
  constructor(private metaService: Meta) {
    this.addTag();
    this.pokemons = POKEMONS;
    this.pictureRoute = ROUTES.pokemonTypesFolder;
  }
  ngOnInit(): void {
    console.log(this.pictureRoute);
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

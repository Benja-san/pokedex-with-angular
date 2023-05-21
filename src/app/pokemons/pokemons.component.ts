import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  constructor(private metaService: Meta) {
    this.addTag();
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

import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Pokemon } from '../../models/Pokemon';
import { POKEMONS } from 'src/data/pokemons';
import { ROUTES } from 'src/data/routes';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  private _pictureRoute: string = ROUTES.pokemonTypesFolder;
  private _pokemons: Pokemon[] = POKEMONS;

  constructor(private metaService: Meta) {
    this.addTag();
  }
  ngOnInit(): void {}

  public get pictureRoute(): string {
    return this._pictureRoute;
  }

  public get pokemons(): Pokemon[] {
    return this._pokemons;
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

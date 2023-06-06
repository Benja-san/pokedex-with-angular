import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from 'src/models/Pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  private _pokemonID!: number;
  private _pokemon!: Pokemon | boolean;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._pokemonID = parseInt(params.get('pokemonID') as string);
    });
    this._pokemon = this.pokemonsService.getPokemonById(this._pokemonID);
  }

  get pokemon(): Pokemon {
    return this._pokemon as Pokemon;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { POKEMONS } from 'src/data/pokemons';
import { Pokemon } from 'src/models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  public pokemonID!: number;
  private _pokemons: Pokemon[] = POKEMONS;
  private _pokemon!: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pokemonID = parseInt(params.get('pokemonID') as string);
    });
    this._pokemon = this._pokemons[this.pokemonID - 1];
  }

  get pokemon(): Pokemon {
    if (!this._pokemon) {
      this.router.navigate(['/404']);
      throw new Error('Pokemon not found');
    }
    return this._pokemon;
  }
}

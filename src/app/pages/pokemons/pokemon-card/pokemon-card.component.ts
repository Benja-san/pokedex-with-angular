import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/models/Pokemon';
import { ROUTES } from 'src/data/routes';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Input() key!: number;
  private _pictureRoute: string = ROUTES.pokemonTypesFolder;

  get pictureRoute(): string {
    return this._pictureRoute;
  }
}
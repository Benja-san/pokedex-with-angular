import { PokemonType } from './PokemonType';

export class Pokemon {
  constructor(
    private _name: string,
    private _number: number,
    private _picture: string,
    private _pokemonTypes: PokemonType[]
  ) {}

  public get name(): string {
    return this._name;
  }

  public get number(): number {
    return this._number;
  }

  public get picture(): string {
    return this._picture;
  }

  public get pokemonTypes(): PokemonType[] {
    return this._pokemonTypes;
  }

  public isPokemonType(type: PokemonType): boolean {
    return this.pokemonTypes.indexOf(type) > -1;
  }
}

import { PokemonType } from './PokemonType';

export class Pokemon {
  public name: string;
  public number: number;
  public picture: string;
  public pokemonTypes: PokemonType[];

  constructor(
    name: string,
    number: number,
    picture: string,
    pokemonTypes: PokemonType[]
  ) {
    this.name = name;
    this.number = number;
    this.picture = picture;
    this.pokemonTypes = pokemonTypes;
  }

  public getName(): string {
    return this.name;
  }

  public getNumber(): number {
    return this.number;
  }

  public getPicture(): string {
    return this.picture;
  }

  public getPokemonTypes(): PokemonType[] {
    return this.pokemonTypes;
  }

  public isPokemonType(type: PokemonType): boolean {
    return this.pokemonTypes.indexOf(type) > -1;
  }
}

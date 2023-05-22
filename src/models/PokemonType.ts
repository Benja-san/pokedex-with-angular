export class PokemonType {
  constructor(public _name: string = 'plante') {}

  get name(): string {
    return this._name;
  }
}

export class PokemonType {
  constructor(
    private _name: string,
    private _bColor: string,
    private _picture: string
  ) {}

  public get name(): string {
    return this._name;
  }

  public get bColor(): string {
    return this._bColor;
  }

  public get picture(): string {
    return this._picture;
  }
}

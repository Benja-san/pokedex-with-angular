export class Searchbar {
  constructor(private _textInput: string = '') {}

  public get textInput(): string {
    return this._textInput;
  }

  public set textInput(textInput: string) {
    this._textInput = textInput;
  }
}

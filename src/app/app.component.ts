import { Component } from '@angular/core';
import { Searchbar } from 'src/models/Searchbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _title: string = 'pokedex-app';
  private _searchbar: Searchbar = new Searchbar();

  public get title(): string {
    return this._title;
  }

  public get searchbar(): Searchbar {
    return this._searchbar;
  }

  public set searchbar(value: Searchbar) {
    this._searchbar = value;
  }
}

import { Component } from '@angular/core';
import { ROUTES } from 'src/data/routes';
import { Searchbar } from 'src/models/Searchbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _searchBar: Searchbar = new Searchbar();
  private _pictureRoute: string = ROUTES.globalfolder;
  private _title: string = 'pokedex-app';
  constructor() {}

  public get title(): string {
    return this._title;
  }

  public get searchBar(): Searchbar {
    return this._searchBar;
  }

  public set searchBar(value: Searchbar) {
    this._searchBar = value;
  }

  public get pictureRoute(): string {
    return this._pictureRoute;
  }
  ngOnInit(): void {}
}

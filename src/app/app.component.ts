import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES, APP_ROUTES } from 'src/data/routes';
import { Searchbar } from 'src/models/Searchbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _searchBar: Searchbar = new Searchbar();
  private _pictureRoute: string = ROUTES.globalFolder;
  private _title: string = 'pokedex-app';
  private _appRoutes: string[] = [APP_ROUTES.home, APP_ROUTES.index];
  constructor(private router: Router) {}

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

  public get hasHeader(): boolean {
    return this._appRoutes.includes(this.router.url);
  }

  ngOnInit(): void {}
}

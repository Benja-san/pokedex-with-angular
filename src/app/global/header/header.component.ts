import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ROUTES, APP_ROUTES } from 'src/data/routes';
import { Searchbar } from 'src/models/Searchbar';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() searchbar!: Searchbar;
  private _pictureRoute: string = ROUTES.globalFolder;
  private _appRoutes: string[] = [
    APP_ROUTES.home,
    APP_ROUTES.index,
    APP_ROUTES.notFound,
  ];
  constructor(private router: Router, private searchService: SearchService) {}

  public get pictureRoute(): string {
    return this._pictureRoute;
  }

  public get hasHeader(): boolean {
    return this._appRoutes.includes(this.router.url);
  }

  ngOnInit(): void {}

  public searchPokemon(): void {
    this.searchService.setSearchInput(this.searchbar.textInput);
  }
}

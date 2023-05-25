import { Component } from '@angular/core';
import { ROUTES } from 'src/data/routes';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  private _pictureRoute = ROUTES.globalFolder;
  constructor() {}
  ngOnInit(): void {}

  public get pictureRoute(): string {
    return this._pictureRoute;
  }
}

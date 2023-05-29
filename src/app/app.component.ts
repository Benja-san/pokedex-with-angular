import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _title: string = 'pokedex-app';

  public get title(): string {
    return this._title;
  }
}

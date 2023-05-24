import { Component } from '@angular/core';
import { ROUTES } from 'src/data/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokedex-app';
  inputText: string = '';
  pictureRoute: string;
  constructor() {
    this.pictureRoute = ROUTES.globalfolder;
  }
}

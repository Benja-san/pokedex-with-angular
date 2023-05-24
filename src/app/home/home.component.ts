import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private metaService: Meta) {
    this.addTag();
  }
  ngOnInit(): void {}
  addTag() {
    this.metaService.addTag({
      name: 'description',
      content:
        'PokedexApp welcomes you to its homepage, start browsing now to fin all the pokemon secrets you need!',
    });
    this.metaService.addTag({
      property: 'og:title',
      content: 'PokedexApp : Welcome',
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, PokemonsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}

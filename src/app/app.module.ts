import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HomeComponent } from './home/home.component';
import { HoveringEffectDirective } from './hovering-effect.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HeaderComponent } from './global/header/header.component';
import { PokemonCardComponent } from './pages/pokemons/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    HomeComponent,
    HoveringEffectDirective,
    PageNotFoundComponent,
    PokemonComponent,
    HeaderComponent,
    PokemonCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}

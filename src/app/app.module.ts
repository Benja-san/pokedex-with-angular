import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HomeComponent } from './home/home.component';
import { HoveringEffectDirective } from './hovering-effect.directive';

@NgModule({
  declarations: [AppComponent, PokemonsComponent, HomeComponent, HoveringEffectDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}

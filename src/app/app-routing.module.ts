import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonsComponent,
    title: 'PokedexApp : Pokedex',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'PokedexApp : Welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

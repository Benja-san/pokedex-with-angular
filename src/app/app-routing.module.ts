import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'PokedexApp : Welcome',
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
    title: 'PokedexApp : Pokedex',
  },
  {
    path: 'pokemons/:pokemonID',
    component: PokemonComponent,
    title: 'PokedexApp : Pokemon :pokemonID',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    title: 'PokedexApp : Not Found',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

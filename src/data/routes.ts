import { environment } from 'src/environments/environment.development';

const FRONTEND_URL = {
  dev: environment.frontend,
};

const ROUTES = {
  pokemonsFolder: 'assets/pokemons/',
  pokemonTypesFolder: 'assets/pokemonTypes/',
  globalFolder: 'assets/global/',
};

const APP_ROUTES = {
  index: '/',
  home: '/home',
  pokemons: '/pokemons',
  pokemon: (slug: string) => `/pokemon/${slug}`,
};

export { ROUTES, FRONTEND_URL, APP_ROUTES };

import { environment } from 'src/environments/environment.development';

const FRONTEND_URL = {
  dev: environment.frontend,
};

const ROUTES = {
  pokemonsFolder: 'assets/pokemons/',
  pokemonTypesFolder: 'assets/pokemonTypes/',
  globalfolder: 'assets/global/',
};

export { ROUTES, FRONTEND_URL };

import { GET_GAMES } from '../types';

export const getGames = (state) => state.gamesReducer.games;
export const getLoadedGames = (state) => state.gamesReducer.loading;

import { GET_GAMES, SET_GAMES } from '../types';

const initialState = {
  games: [],
  loading: true,
};

const gamesReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GAMES:
      return {
        ...state,
        games: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default gamesReducer;

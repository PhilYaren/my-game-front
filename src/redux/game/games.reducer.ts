import { GET_GAMES, SET_GAMES, SET_QUSTION_ANSWER } from '../types';

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
    case SET_QUSTION_ANSWER: {
      return {
        ...state,
        games: {},
      };
    }
    default:
      return state;
  }
};

export default gamesReducer;

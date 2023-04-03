import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './game/games.reducer';

const store = configureStore({
  reducer: {
    // Add your reducers here
    gamesReducer: gamesReducer,
  },
});

export default store;

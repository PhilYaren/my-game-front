import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './game/games.reducer';
import {UserReducer} from "./user/user.reducer";

const store = configureStore({
  reducer: {
    UserReducer,
    // Add your reducers here
    gamesReducer: gamesReducer,
  },
});

export default store;

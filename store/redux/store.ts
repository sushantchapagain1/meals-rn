import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './fav.slice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

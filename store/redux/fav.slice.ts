import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavState {
  favIds: string[];
}

interface FavActionPayload {
  id: string;
}

const initialState: FavState = {
  favIds: [],
};

const favSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<FavActionPayload>) => {
      state.favIds.push(action.payload.id);
    },
    removeFav: (state, action: PayloadAction<FavActionPayload>) => {
      state.favIds.splice(state.favIds.indexOf(action.payload.id), 1);
    },
  },
});

export const {addFav, removeFav} = favSlice.actions;

export const getFavMeals = (state: any) => state.favorites.favIds;

export default favSlice.reducer;

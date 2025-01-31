import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations.js';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    location: '',
    filters: null,
};

const campersSlice = createSlice({
 name: 'campers',
 initialState,
 reducers: {
    setLocation(state, action) {
        state.location = action.payload;
    },
    setFilters(state, action) {
        state.filters = action.payload;
    },
    addToFavorites(state, action) {
        state.favorites.unshift((action.payload));
    },
    removeFromFavorites(state, action) {
        state.favorites = state.favorites.filter(({ id }) => id !== action.payload.id);
    }
 },
 extraReducers: builder => {
    builder 
    .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
    .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
    })
    .addCase(fetchCamperById.fulfilled, state => {
        state.isLoading = false;
    })
    .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });
 },
});

export const { 
    setLocation,
    setFilters,
    addToFavorites,
    removeFromFavorites,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
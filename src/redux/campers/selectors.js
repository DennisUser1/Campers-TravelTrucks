import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;
export const selectFavorites = state => state.campers.favorites;
export const selectLocation = state => state.campers.location;
export const selectFilters = state => state.campers.filters;
export const selectError = state => state.campers.error;
export const selectIsLoading = state => state.campers.isLoading;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectFilters],
    (campers, filters) => {
        if (!filters) return campers; 

        return campers.filter(camper => {
            const formFilter = !filters.form || camper.form === filters.form;
            return formFilter;
        });
    }
);
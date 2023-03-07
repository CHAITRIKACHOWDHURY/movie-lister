import { createSelector } from "@reduxjs/toolkit";
import RootState from "../reducers/movieList.reducer";

export const getMovieList = (state: RootState) => state.results;
export const getLoading = (state: RootState) => state.isLoading;

export const getSearcheddMovieList = 
    createSelector(
        [getMovieList, (state, input: string) => input], 
        (movies, input) => movies.filter(m => m.title.includes(input.trim()))
    );

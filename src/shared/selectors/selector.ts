import { createSelector } from "@reduxjs/toolkit";
import RootState from "../reducers/movieList.reducer";
import MovieData from "../models/MovieData";

// gets the list of movies from store and modifies the title to be displayed
export const getMovieList = (state: RootState): MovieData[] => {
    const r = state.results.slice().map((m) => {
        return Object.assign({}, m, {title: 'Episode '  + convertToRoman(m.episode_id)+ ' - ' + m.title});
    });
    return r;
};

// converts number to roman
export const convertToRoman = (num: number): string => { 
    if (num >= 40)  return 'XL' + convertToRoman(num - 40);
    if (num >= 10)  return 'X' + convertToRoman(num - 10);
    if (num >= 9)  return 'IX' + convertToRoman(num - 9);
    if(num >= 5) return 'V' + convertToRoman(num - 5);
    if(num >= 4) return 'IV' + convertToRoman(num - 4);
    if(num >= 1) return 'I' + convertToRoman(num - 1);  
    return '';
}

// gets Api loading status
export const getLoading = (state: RootState): boolean => state.isLoading;

// filter movie list on basis of search input
export const getSearcheddMovieList = 
    createSelector(
        [getMovieList, (state, input: string) => input], 
        (movies, input) => movies.filter(m => m.title.toLocaleLowerCase().includes(input.toLocaleLowerCase().trim()))
    );

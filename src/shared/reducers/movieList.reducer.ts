import { createReducer } from "@reduxjs/toolkit";
import { loadMoviesInProgress,
         loadMoviesSuccess,
         loadMoviesFailure,
         sortByEpisodeAction,
         sortByYearAction } from "../actions/movieList.action";
import MovieData from "../models/MovieData";
import ResponseObject from "../models/ResponseObject";

export default interface RootState {
  results: MovieData[];
  isLoading: boolean;
}

const initialState: RootState = { isLoading: false, results: []};

export const movieListReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(loadMoviesInProgress, (state: RootState) => {
        return {...state, isLoading: true};
      })
      .addCase(loadMoviesSuccess, (state: RootState, action: {payload: ResponseObject}) => {
        return {...state, isLoading: false, results: action.payload.results};
      })
      .addCase(loadMoviesFailure, (state: RootState, action: {payload: unknown}) => {
        alert(action.payload);
        return {...state, isLoading: false};
      })
      .addCase(sortByEpisodeAction, (state: RootState) => {
        return {...state, results: state.results.slice().sort((a, b) => a.episode_id > b.episode_id ? 1 : -1)};
      })
      .addCase(sortByYearAction, (state: RootState) => {
        return {...state, results: state.results.slice().sort((a, b) => new Date(a.release_date) > new Date(b.release_date) ? 1 : -1)};;
      })
});
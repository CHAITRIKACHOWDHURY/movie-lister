
import { Dispatch } from "@reduxjs/toolkit";
import { loadMoviesFailure, loadMoviesInProgress, loadMoviesSuccess } from "../actions/movieList.action";
import ResponseObject from "../models/ResponseObject";
import { AppThunk } from "../store/store";

// Call Api to get movie list
export const loadMovies = (): AppThunk  => async (dispatch: Dispatch) => {
    try {
        dispatch(loadMoviesInProgress());
        const response = await fetch('https://swapi.dev/api/films/?format=json');
        const data: ResponseObject = await response.json();
        dispatch(loadMoviesSuccess(data));
    } catch (e) {
        dispatch(loadMoviesFailure(e));
    }
}
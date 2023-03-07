
import {
    SORT_BY_EPISODE,
    SORT_BY_YEAR,
    LOAD_MOVIE_LIST_INPROGRESS,
    LOAD_MOVIE_LIST_SUCCESS,
    LOAD_MOVIE_LIST_FAILURE
} from "../constants";
import { createAction } from "@reduxjs/toolkit";
import ResponseObject from "../models/ResponseObject";

export const loadMoviesInProgress = createAction(LOAD_MOVIE_LIST_INPROGRESS);

export const loadMoviesSuccess = createAction<ResponseObject>(LOAD_MOVIE_LIST_SUCCESS);

export const loadMoviesFailure = createAction<unknown>(LOAD_MOVIE_LIST_FAILURE);

export const sortByEpisodeAction = createAction(SORT_BY_EPISODE);

export const sortByYearAction = createAction(SORT_BY_YEAR);



import React, { useEffect, useState } from 'react';
import './App.css';
import SearchAndSorting from './features/movie-listing/SearchAndSorting';
import MovieList from './features/movie-listing/MovieList';
import MovieDetails from './features/movie-listing/MovieDetails';
import { connect, useSelector } from 'react-redux';
import { loadMovies } from './shared/thunks/thunk';
import MovieData from './shared/models/MovieData';
import { getLoading, getMovieList, getSearcheddMovieList } from './shared/selectors/selector';
import { sortByEpisodeAction, sortByYearAction } from './shared/actions/movieList.action';
import RootState from './shared/reducers/movieList.reducer';
interface Props {
  results: MovieData[];
  isLoading: boolean;
  startLoadingMovies: () => void;
  sortByEpisode: () => void;
  sortByYear: () => void;
}

const App = ({
    results = [],
    isLoading,
    startLoadingMovies,
    sortByEpisode,
    sortByYear} : Props) => {
  const [selectedMovie, setSelectedMovie] = useState<MovieData | undefined>();
  const [inputSearch, searchMovie] = useState<string>('');
  const movieSelected = (movie: MovieData) => {
    setSelectedMovie(movie);
  }
  useSelector(state => results = getSearcheddMovieList(state, inputSearch));
  useEffect(() => { startLoadingMovies(); }, [startLoadingMovies]);
  return (
    <div className="App">
      <SearchAndSorting 
        sortByEpisode={sortByEpisode}
        sortByYear={sortByYear}
        searchMovie={searchMovie}
        inputSearch={inputSearch}/>
      <div className="Row">
        <MovieList
          movieSelected={movieSelected}
          results={results}
          isLoading={isLoading}/>
        <MovieDetails movie={selectedMovie}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
     isLoading: getLoading(state),
     results: getMovieList(state)
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  startLoadingMovies: () => dispatch(loadMovies()),
  sortByEpisode: () => dispatch(sortByEpisodeAction()),
  sortByYear: () => dispatch(sortByYearAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react';
import Movie from './Movie';
import MovieData from '../../shared/models/MovieData';

interface Props {
   results: MovieData[];
   isLoading: boolean;
   movieSelected: (movie: MovieData) => void;
}
/**
 * 
 * @param isLoading for data load indication
 * @param results list of movies
 * @param movieSelected pass the event when any movie is selected
 * @return HTML element of list of movies
 */
const MovieList = ({results, isLoading, movieSelected} : Props) => {
  const loadingMessage = <div className="Column">Loading...</div>;
  const content = (
    <div className="Column"> 
      {results.map(movie => 
        <Movie item={movie} 
               data-testid={`${movie.episode_id}-item`}
               movieSelected={movieSelected}
               key={movie.episode_id}
      />)}
    </div>
  );
  return isLoading ? loadingMessage : content;
}

export default MovieList;
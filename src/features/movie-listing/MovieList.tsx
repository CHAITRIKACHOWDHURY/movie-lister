import React from 'react';
import Movie from './Movie';
import MovieData from '../../shared/models/MovieData';

interface Props {
   results: MovieData[];
   isLoading: boolean;
   movieSelected: (movie: MovieData) => void;
}

const MovieList = ({results = [], isLoading, movieSelected} : Props) => {
  const loadingMessage = <div className="Column">Loading...</div>;
  const content = (
    <div className="Column"> 
      {results.map(movie => 
        <Movie item={movie} 
               movieSelected={movieSelected}
               key={movie.episode_id}
      />)}
    </div>
  );
  return isLoading ? loadingMessage : content;
}

export default MovieList;
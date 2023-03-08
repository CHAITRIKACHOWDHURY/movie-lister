import React from 'react';
import './MovieDetails.css';
import MovieData from '../../shared/models/MovieData';

const MovieDetails = ({movie}: {movie: MovieData | undefined}) => {
  const noSelection = (
    <div className="Column No-selection">
      <span>No movie selected</span>
    </div>
  );
  const withSelection = (
    <div className="Column Movie-details">
      <h2>{movie?.title}</h2>
      <p>{movie?.opening_crawl}</p>
      <p>Directed by: {movie?.director}</p>
    </div>
  );
  return movie ? withSelection : noSelection;
}

export default MovieDetails;
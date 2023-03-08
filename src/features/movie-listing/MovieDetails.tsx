import React from 'react';
import './MovieDetails.css';
import MovieData from '../../shared/models/MovieData';

/**
 * 
 * @param movie Containing movie information
 * @return HTML element of Movie Details
 */
const MovieDetails = ({movie}: {movie: MovieData | undefined}) => {
  const noSelection = (
    <div 
      data-testid="No-selection"
      className="Column No-selection">
      <span>No movie selected</span>
    </div>
  );
  const withSelection = (
    <div 
      data-testid="Movie-details"
      className="Column Movie-details">
      <h2>{movie?.title}</h2>
      <p>{movie?.opening_crawl}</p>
      <p>Directed by: {movie?.director}</p>
    </div>
  );
  return movie ? withSelection : noSelection;
}

export default MovieDetails;
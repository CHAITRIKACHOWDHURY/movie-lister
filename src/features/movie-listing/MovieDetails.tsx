import React from 'react';
import MovieData from '../../shared/models/MovieData';

const MovieDetails = ({movie}: {movie: MovieData | undefined}) => {
  const noSelection = <div className="Column">No movie selected</div>;
  const withSelection = (<div className="Column">
    {movie?.title}
  </div>);
  return movie ? withSelection : noSelection;
}

export default MovieDetails;
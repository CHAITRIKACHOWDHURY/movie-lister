import React from 'react';
import MovieData from '../../shared/models/MovieData';
import './Movie.css';

/**
 * 
 * @param item Containing movie information
 * @param movieSelected Method will fire on user selection and notify parent
 * @return HTML element of Movie Episode, Movie Title, Movie Release Date
 */
const Movie = ({item, movieSelected} : {item: MovieData, movieSelected: (item: MovieData) => void}) => {
  return(
    <div className="Row Movie"
         data-testid="Movie"
         onClick={() => movieSelected(item)}>
      <div className="Epispde-index"> 
        EPISODE {item.episode_id}
      </div>
      <h5 className="Epispde-name"> 
        {item.title}
      </h5>
      <div className="Epispde-cell"> 
        {item.release_date}
      </div>
    </div>
  );
}

export default Movie;
import React from 'react';
import MovieData from '../../shared/models/MovieData';
import './Movie.css';

const Movie = ({item, movieSelected} : {item: MovieData, movieSelected: (item: MovieData) => void}) => {
  return(
    <div className="Row Movie"
         onClick={() => movieSelected(item)}>
      <div className="Epispde-Index"> 
        EPISODE {item.episode_id}
      </div>
      <h5 className="Epispde-Name"> 
        {item.title}
      </h5>
      <div className="Epispde-Cell"> 
        {item.release_date}
      </div>
    </div>
  );
}

export default Movie;
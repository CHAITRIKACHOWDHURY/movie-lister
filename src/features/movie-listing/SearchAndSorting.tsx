import React from 'react';
import './SearchAndSorting.css';

interface Props {
  sortByEpisode: () => void;
  sortByYear: () => void;
  inputSearch: string;
  searchMovie: (i: string) => void;
}

const SearchAndSorting = ({sortByEpisode, sortByYear, inputSearch, searchMovie}: Props) => {
  return(
    <div className="SearchAndSortingPanel">
      <button className="SortBy">
              Sort by...
            </button>
            <div className="Btn-Tooltip">
              <button 
                onClick={() => sortByEpisode()}>
                Episode
              </button>
              <button
                onClick={() => sortByYear()}>
                Year
              </button>
            </div>
            <input
              className="Search"
              type="text"
              placeholder="Type to search..."
              value={inputSearch}
              onChange={e => searchMovie(e.target.value)}
            />
    </div>
  );
}

export default SearchAndSorting;
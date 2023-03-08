import React, { useState } from 'react';
import './SearchAndSorting.css';

interface Props {
  sortByEpisode: () => void;
  sortByYear: () => void;
  inputSearch: string;
  searchMovie: (i: string) => void;
}

const SearchAndSorting = ({sortByEpisode, sortByYear, inputSearch, searchMovie}: Props) => {
  const [showSortingOption, setShowSortingOption] = useState<boolean>(false);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const classNameBtn = `Sort-by ${showSortingOption ? 'Btn-active' : ''}`;
  const classNameInput = `Search-container ${inputFocused ? 'Search-container-active' : ''}`;
  return(
    <div className="Search-and-sorting-panel">
      <button
        onClick={() => setShowSortingOption(true)}
        className={classNameBtn}>
        Sort by...
      </button>
      {showSortingOption &&
        <div className="Btn-tooltip">
          <h5
            className="Row">
            Sort by
            <i
              onClick={() => setShowSortingOption(false)}
              className="Close-icon"></i>
          </h5>
          <div 
            className="Row"
            onClick={() => sortByEpisode()}>
            Episode
          </div>
          <div
            className="Row"
            onClick={() => sortByYear()}>
            Year
          </div>
        </div>
      }
      <div className={classNameInput}>
        <i className="Search-icon"></i>
        <input
          type="text"
          placeholder="Type to search..."
          value={inputSearch}
          onBlur={() => setInputFocused(false)}
          onFocus={() => setInputFocused(true)}
          onChange={e => searchMovie(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchAndSorting;
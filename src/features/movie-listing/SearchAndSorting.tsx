import React, { useState } from 'react';
import './SearchAndSorting.css';

interface Props {
  sortByEpisode: () => void;
  sortByYear: () => void;
  inputSearch: string;
  searchMovie: (i: string) => void;
}

/**
 * 
 * @param sortByEpisode sort by episode
 * @param sortByYear sort by year
 * @param inputSearch captures the input search
 * @param searchMovie Fires when user enters the input search
 * @return HTML element for sorting and searching
 */
const SearchAndSorting = ({sortByEpisode, sortByYear, inputSearch, searchMovie}: Props) => {
  const [showSortingOption, setShowSortingOption] = useState<boolean>(false);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const classNameBtn = `Sort-by ${showSortingOption ? 'Btn-active' : ''}`;
  const classNameInput = `Search-container ${inputFocused ? 'Search-container-active' : ''}`;
  return(
    <div className="Search-and-sorting-panel">
      <button
        data-testid="SortBy"
        onClick={() => setShowSortingOption(true)}
        className={classNameBtn}>
        Sort by...
      </button>
      {showSortingOption &&
        <div className="Btn-tooltip"
             data-testid="Btn-tooltip">
          <h5
            className="Row">
            Sort by
            <i
              data-testid="Close-icon"
              onClick={() => setShowSortingOption(false)}
              className="Close-icon"></i>
          </h5>
          <div 
            className="Row"
            data-testid="Episode-sort"
            onClick={() => sortByEpisode()}>
            Episode
          </div>
          <div
            className="Row"
            data-testid="Year-sort"
            onClick={() => sortByYear()}>
            Year
          </div>
        </div>
      }
      <div className={classNameInput}
           data-testid="Search-container">
        <i className="Search-icon"></i>
        <input
          type="text"
          data-testid="Search"
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
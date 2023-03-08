import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchAndSorting from './SearchAndSorting';

test('sortByEpisode', () => {
  const fakeMethod = jest.fn();
  const spyOnMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={spyOnMethod}
      inputSearch=""
      sortByYear={fakeMethod}
      searchMovie={fakeMethod}/>
  );
  fireEvent.click(screen.getByTestId('SortBy'));
  fireEvent.click(screen.getByTestId('Episode-sort'));
  expect(spyOnMethod).toHaveBeenCalled();
});
test('sortByYear', () => {
  const fakeMethod = jest.fn();
  const spyOnMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={fakeMethod}
      inputSearch=""
      sortByYear={spyOnMethod}
      searchMovie={fakeMethod}/>
  );
  fireEvent.click(screen.getByTestId('SortBy'));
  fireEvent.click(screen.getByTestId('Year-sort'));
  expect(spyOnMethod).toHaveBeenCalled();
});
test('searchMovie', () => {
  const fakeMethod = jest.fn();
  const spyOnMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={fakeMethod}
      inputSearch=""
      sortByYear={fakeMethod}
      searchMovie={spyOnMethod}/>
  );
  fireEvent.change(screen.getByTestId('Search'), { target: { value: 'the' }});
  expect(spyOnMethod).toHaveBeenCalled();
});
test('setInputFocused in focusOut', () => {
  const fakeMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={fakeMethod}
      inputSearch=""
      sortByYear={fakeMethod}
      searchMovie={fakeMethod}/>
  );
  fireEvent.focusOut(screen.getByTestId('Search'));
  expect(screen.getByTestId('Search-container')).not.toHaveClass('Search-container-active');
});
test('setInputFocused in focusIn', () => {
  const fakeMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={fakeMethod}
      inputSearch=""
      sortByYear={fakeMethod}
      searchMovie={fakeMethod}/>
  );
  fireEvent.focus(screen.getByTestId('Search'));
  expect(screen.getByTestId('Search-container')).toHaveClass('Search-container-active');
});
test('button tooltip display condition', () => {
  const fakeMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={fakeMethod}
      inputSearch=""
      sortByYear={fakeMethod}
      searchMovie={fakeMethod}/>
  );
  fireEvent.click(screen.getByTestId('SortBy'));
  expect(screen.getByTestId('Btn-tooltip')).toBeInTheDocument();
});
test('button tooltip hidden condition', () => {
  const fakeMethod = jest.fn();
  render(
    <SearchAndSorting
      sortByEpisode={fakeMethod}
      inputSearch=""
      sortByYear={fakeMethod}
      searchMovie={fakeMethod}/>
  );
  fireEvent.click(screen.getByTestId('SortBy'));
  fireEvent.click(screen.getByTestId('Close-icon'));
  expect(screen.queryByTestId('Btn-tooltip')).not.toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import App from './App';

test('renders App Component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Sort/i)).toBeInTheDocument();
});

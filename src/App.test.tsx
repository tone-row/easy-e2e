import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const input = screen.getByTestId(/user input/i);
  expect(input).toBeInTheDocument();
});

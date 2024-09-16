// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  // Example test case
  expect(screen.getByText(/Hi, it's me Sandesh/i)).toBeInTheDocument();
});

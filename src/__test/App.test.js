import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders ¿Olvidaste tu contraseña?', () => {
  render(<App />);
  const linkElement = screen.getByText(/¿Olvidaste tu contraseña?/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /vite/i })).toBeInTheDocument();
});
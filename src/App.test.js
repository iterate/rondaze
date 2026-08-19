import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the start screen welcome heading', () => {
  render(<App />);
  const heading = screen.getByText(/welcome to rondaze/i);
  expect(heading).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';
import ThemeProvider from './themeProvider';
import "@testing-library/jest-dom";

test('renders a heading', () => {
  render(<ThemeProvider><App /></ThemeProvider>);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});
